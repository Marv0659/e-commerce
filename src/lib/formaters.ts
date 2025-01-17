const CURRENCY_FORMAT = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});

export function formatCurrency(amount: number) {
  return CURRENCY_FORMAT.format(amount);
}

const NUMBER_FORMAT = new Intl.NumberFormat("en-US");

export function formatNumber(number: number) {
  return NUMBER_FORMAT.format(number);
}
