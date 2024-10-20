// ! ----------------------------- imports start ---------------------------------- //
import React, { useEffect } from 'react';
import { Form, Input, Button, Select, DatePicker, Modal } from 'antd';
import { Transaction, TransactionFormProps } from 'types';
import { useDispatch } from 'react-redux';
import { addTransaction, editTransaction } from 'store/transactionSlice';
import moment from 'moment';
// ! ----------------------------- imports end ---------------------------------- //

const { Option } = Select;

const TransactionForm: React.FC<TransactionFormProps> = ({
  isModalOpen,
  setIsModalOpen,
  editingTransaction,
  setEditingTransaction,
}) => {

// ! ----------------------------- start states ---------------------------------- //
  const [form] = Form.useForm();
  const dispatch = useDispatch();
// ! ----------------------------- end states ---------------------------------- //

// ! ----------------------------- funcs start ---------------------------------- //

  useEffect(() => {
    if (editingTransaction) {
      form.setFieldsValue({
        ...editingTransaction,
        date: editingTransaction ? moment(editingTransaction.date) : null,
      });
    } else {
      form.resetFields();
    }
  }, [editingTransaction, form]);

  const handleOk = () => {
    setIsModalOpen(false);
    setEditingTransaction(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEditingTransaction(null);
  };

  const handleSubmit = (values) => {
    const transaction: Transaction = {
      ...values,
      amount: parseFloat(values.amount),
      date: values.date.format('YYYY-MM-DD'),
    };

    if (editingTransaction) {
      dispatch(editTransaction({ ...transaction, id: editingTransaction.id }));
    } else {
      dispatch(addTransaction(transaction));
    }

    form.resetFields();
    setIsModalOpen(false);
    setEditingTransaction(null);
  };
// ! ----------------------------- funcs end ---------------------------------- //

  return (
    <Modal
      title={editingTransaction ? 'Edit Transaction' : 'Add Transaction'}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={false}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          name="type"
          label="Type"
          rules={[{ required: true, message: 'Please select the transaction type!' }]}
        >
          <Select>
            <Option value="income">Income</Option>
            <Option value="expense">Expense</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="amount"
          label="Amount"
          rules={[{ required: true, message: 'Please enter the amount!' }]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true, message: 'Please enter the category!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="date"
          label="Date"
          rules={[{ required: true, message: 'Please select a date!' }]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item name="description" label="Description">
          <Input.TextArea />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            {editingTransaction ? 'Edit Transaction' : 'Add Transaction'}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default TransactionForm;
