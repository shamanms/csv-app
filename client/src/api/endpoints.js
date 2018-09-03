const host = window.location.hostname;
const port = 3001;
const apiUrl = `http://${host}:${port}`;

export const endpoints = {
  all: `${apiUrl}/api/transactions`,
  one: transactionId => `${apiUrl}/api/transactions/${transactionId}`,
};