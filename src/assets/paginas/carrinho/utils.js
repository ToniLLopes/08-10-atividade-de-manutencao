// utils.js

export const calcularTotal = (itens) => {
  return itens.reduce((total, item) => total + item.price, 0);
};
