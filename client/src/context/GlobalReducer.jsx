const reducer = (state, action) => {
  switch(action.type) {
    case 'ALL_PAYMENTS':
      return {
        ...state,
        results: action.payload
      }
    case 'DELETE_PAYMENT':
      return {
        ...state,
        results: state.results.filter(result => result._id !== action.payload)
      }
    case 'ADD_PAYMENT':
      return {
        ...state,
        results: [action.payload, ...state.results]
      }
    default:
      return state;
  }
}

export default reducer;
