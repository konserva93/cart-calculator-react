export const getProducts = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve([
      {title: 'Carrot', price: 2},
      {title: 'Potato', price: 3},
      {title: 'Fish', price: 10},
      {title: 'Meat', price: 13},
      {title: 'Eggs', price: 6},
    ]), 2000);
  })
};
