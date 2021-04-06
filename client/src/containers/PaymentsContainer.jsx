import { useContext, useEffect } from 'react'
import ListOfPayments from '../components/ListOfPayments';
import TotalPayments from '../components/TotalPayments';
import { MainContext } from '../context/MainContext'

const PaymentsContainer = () => {
  const { results, getPayments } = useContext(MainContext);

  useEffect(() => {
    getPayments();
  });

  return (
    <>
      <ListOfPayments data={results} />
      <TotalPayments data={results} />
    </>
  )
}

export default PaymentsContainer
