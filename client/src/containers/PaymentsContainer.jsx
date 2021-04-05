import { useState, useEffect } from 'react'
import ListOfPayments from '../components/ListOfPayments';
import TotalPayments from '../components/TotalPayments';

const PaymentsContainer = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch('/api/v1/payments', { method: 'GET' });
      const data = await response.json();
  
      setPayments(data.results);
    }

    fetchResults();
  }, []);

  return (
    <>
      <ListOfPayments data={payments} />
      <TotalPayments data={payments} />
    </>
  )
}

export default PaymentsContainer
