// ! ----------------------------- imports start ---------------------------------- //
import SummaryView from 'components/pages/home/SummaryView';
import WrapperComponent from 'components/layoutComponents/WrapperComponent'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
// ! ----------------------------- imports end ---------------------------------- //

const Summary: React.FC = () => {
  const transactions = useSelector((state:RootState) => state.transactions.transactions)

  return (
    <WrapperComponent>
        <SummaryView transactions={transactions} />
  </WrapperComponent>
  )
}

export default Summary
