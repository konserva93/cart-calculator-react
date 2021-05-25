import {getProducts as get} from '../../api/products';

export const getProducts = () => dispatch => {
  get().then(response => {
    dispatch({
      type: 'SET_PRODUCTS',
      payload: response,
    })
  })
};
