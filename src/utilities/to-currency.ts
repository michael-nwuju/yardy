const currencyToLocaleMap = {
  NGN: "en-NG",
  USD: "en-US",
  GHS: "en-GH",
  KES: "en-KE",
};

type currencyType = "NGN" | "USD" | "GHS" | "KES";

const getCurrencyLocale = (currency: currencyType) =>
  currencyToLocaleMap[currency];

export const toCurrency = (
  amount: number | string,
  currency?: currencyType
): string => {
  const selectedCountry = currency || "NGN";

  return Number(amount).toLocaleString(getCurrencyLocale(selectedCountry), {
    style: "currency",
    currency: selectedCountry,
  });
};
