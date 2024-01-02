const API_URL = "https://api.freecurrencyapi.com/v1/";
const API_KEY = "fca_live_WZuQsW127Epp8EvE0oiJBKtqRBA5N4iRNlyjYTiY";

const apiKeyParam = `apikey=${API_KEY}`;

export const fetchCurrencies = async () => {
  try {
    const response = await fetch(`${API_URL}/currencies?${apiKeyParam}`);
    return await handleResponse(response);
  } catch (error) {
    console.error("Network error: ", error);
    throw error;
  }
};

const exchangeParam = (from, to) => {
  return `&base_currency=${from}&currencies=${to}`
}

export const fetchLatest = async (from, to) => {
  try {
    const response = await fetch(
      `${API_URL}/latest?${apiKeyParam}${exchangeParam(from, to)}`
    );
    return await handleResponse(response);
  } catch (error) {
    console.error("Network error: ", error);
    throw error;
  }
};

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorMessage = `HTTP error! Status: ${response.status}`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  return response.json();
};
