import { createContext, useReducer } from 'react'
import GlobalReducer from './GlobalReducer'

const initialState = {
  results: []
};

export const MainContext = createContext(initialState);

export const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  const getPayments = async () => {
    try {
      const response = await fetch('/api/v1/payments', { method: 'GET' });
      const responseJson = await response.json();

      dispatch({
        type: 'ALL_PAYMENTS',
        payload: responseJson.results
      })
    } catch (err) {
      
    }
  }

  const getHistory = async () => {
    try {
      const response = await fetch('/api/v1/history', { method: 'GET' });
      const responseJson = await response.json();

      dispatch({
        type: 'GET_HISTORY',
        payload: responseJson.results
      })
    } catch (err) {
      
    }
  }

  const deletePayment = async id => {
    try {
      await fetch(`/api/v1/payments/${id}`, { method: 'DELETE' });

      dispatch({
        type: 'DELETE_PAYMENT',
        payload: id
      })
    } catch (err) {
      console.log("Something went wrong")
    }
  }

  const addPayment = paymentObj => {
    dispatch({
      type: 'ADD_PAYMENT',
      payload: paymentObj
    })
  }
  
  return (
    <MainContext.Provider value={{
      results: state.results,
      deletePayment,
      addPayment,
      getPayments,
      getHistory
    }}>
      {children}
    </MainContext.Provider>
  );
}

