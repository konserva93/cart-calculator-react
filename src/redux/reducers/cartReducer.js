export default(state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      return state;
    }
    case 'REMOVE_FROM_CART': {
      return state;
    }
    case 'SET_PRODUCT_QUANTITY': {
      return state;
    }
    default: return state;
  }
}