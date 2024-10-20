export interface Transaction {
    id?: number;
    type: 'income' | 'expense';
    amount: number;
    category: string;
    date: string;
    description?: string;
}

export interface TransactionFormProps {
    isModalOpen: boolean;
    setIsModalOpen: (isModalOpen: boolean) => void;
    editingTransaction: Transaction | null;
    setEditingTransaction: (transaction: Transaction | null) => void;
  }