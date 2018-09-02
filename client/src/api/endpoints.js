const apiUrl = 'http://localhost:3001'

export const endpoints = {
  all: `${apiUrl}/api/transactions`,
  one: transactionId => `${apiUrl}/api/transactions/${transactionId}`,
};