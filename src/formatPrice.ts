const formatPrice = (cents: number) => `$${(cents / 100).toFixed(2)}`;

export default formatPrice;
