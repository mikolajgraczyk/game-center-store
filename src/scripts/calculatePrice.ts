const calculatePrice = (discount: number, price: number) =>
  (price - (price * discount) / 100).toFixed(2);

export default calculatePrice;
