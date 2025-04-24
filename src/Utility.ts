export const formatPrice = (price: string | number) => {
  const toNumber = Number(price)
  return toNumber.toLocaleString();
}