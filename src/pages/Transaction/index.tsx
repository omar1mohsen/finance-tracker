// ! ----------------------------- imports start ---------------------------------- //
import React from 'react';
import TransactionList from 'components/pages/home/TransactionList';
import WrapperComponent from 'components/layoutComponents/WrapperComponent';
// ! ----------------------------- imports end ---------------------------------- //

const Home: React.FC = () => {

  return (
    <WrapperComponent>
      <TransactionList />
    </WrapperComponent>
  );
  
};

export default Home;
