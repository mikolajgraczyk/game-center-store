export const calculatePrice = (discount: number, price: number) => {
  return (price - (price * discount) / 100).toFixed(2);
};
