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
      console.log(responseJson.results)
      dispatch({
        type: 'ALL_PAYMENTS',
        payload: responseJson.results
      })
    } catch (err) {
      
    }
  }

  const deletePayment = id => {
    dispatch({
      type: 'DELETE_PAYMENT',
      payload: id
    })
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
      getPayments
    }}>
      {children}
    </MainContext.Provider>
  );
}

