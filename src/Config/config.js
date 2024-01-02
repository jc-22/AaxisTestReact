export const calculateExchange = (quantity, latest, toCurrency) => {
    return (quantity ?? 1) * (latest[toCurrency] ?? 0);
};

export const isValidNumber = (value) => {
    return /^-?\d*\.?\d*$/.test(value);
};

export const setDisabledButton = (fromCurrency, toCurrency, quantity) => {
    return (!fromCurrency || !toCurrency || !isValidNumber(quantity) || quantity.length == 0);
}