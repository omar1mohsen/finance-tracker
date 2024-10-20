import React, { useState } from 'react';
import { Button, Table, Tag, Space } from 'antd';
import TransactionForm from './TransactionForm';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { removeTransaction } from 'store/transactionSlice';
import { Transaction } from 'types';

const TransactionList: React.FC = () => {
  // ! ----------------------------- start states ---------------------------------- //

  const transactions = useSelector((state: RootState) => state.transactions.transactions);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);

  const columns = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      filters: [
        { text: 'Income', value: 'income' },
        { text: 'Expense', value: 'expense' },
      ],
      onFilter: (value: string, record: Transaction) => record.type === value,
      render: (type: string) => (
        <Tag color={type === 'income' ? 'green' : 'red'}>{type.toUpperCase()}</Tag>
      ),
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      sorter: (a: Transaction, b: Transaction) => a.amount - b.amount,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      sorter: (a: Transaction, b: Transaction) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (record: Transaction) => (
        <Space size="middle">
          <Button
            onClick={() => {
              setEditingTransaction(record);
              setIsModalOpen(true);
            }}
          >
            Edit
          </Button>
          <Button danger onClick={() => dispatch(removeTransaction(record.id))}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  // ! ----------------------------- end states ---------------------------------- //

  return (
    <>
      <div className="pt-2 pb-8 ms-auto w-fit">
        <Button type="primary" onClick={() => setIsModalOpen(true)}>
          Add Transaction
        </Button>
      </div>
      <Table columns={columns} dataSource={transactions} rowKey="id" />
      <TransactionForm
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        editingTransaction={editingTransaction}
        setEditingTransaction={setEditingTransaction}
      />
    </>
  );
};

export default TransactionList;
