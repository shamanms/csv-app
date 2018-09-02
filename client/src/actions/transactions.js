import { endpoints } from '../api/endpoints';
import { fetchData } from './helpers';

export const transactionsActions = {
  getTransactions,
  removeTransaction,
  addTransactions
};

export const transactionConstants = {
  GET_TRANSACTIONS: 'GET_TRANSACTIONS',
  GET_TRANSACTIONS_OK: 'GET_TRANSACTIONS_OK',
  GET_TRANSACTIONS_ERR: 'GET_TRANSACTIONS_ERR',
  REMOVE_TRANSACTION: 'REMOVE_TRANSACTION',
  REMOVE_TRANSACTION_OK: 'REMOVE_TRANSACTION_OK',
  REMOVE_TRANSACTION_ERR: 'REMOVE_TRANSACTION_ERR',
  ADD_TRANSACTIONS: 'ADD_TRANSACTION',
  ADD_TRANSACTIONS_OK: 'ADD_TRANSACTION_OK',
  ADD_TRANSACTIONS_ERR: 'ADD_TRANSACTION_ERR',
};

function getTransactions() {
  return (dispatch, getState) => {
    const state = getState();

    dispatch({ type: transactionConstants.GET_TRANSACTIONS });

    getTransactionsRequest(state, dispatch)
      .then(
        (transactions) => {
          dispatch({
            type: transactionConstants.GET_TRANSACTIONS_OK,
            payload: transactions
          });
        },
        error => {          
          dispatch({
            type: transactionConstants.GET_TRANSACTIONS_ERR,
            error
          });
        }
      );
  };
}

function getTransactionsRequest() {
  return fetchData(endpoints.all, 'GET')
}

function removeTransaction(id) {
  return (dispatch) => {

    dispatch({ type: transactionConstants.REMOVE_TRANSACTION });

    removeTransactionRequest(id)
      .then(
        (transactions) => {
          dispatch({
            type: transactionConstants.REMOVE_TRANSACTION_OK,
            payload: transactions
          });
        },
        error => {          
          dispatch({
            type: transactionConstants.REMOVE_TRANSACTION_ERR,
            error
          });
        }
      );
  };
}

function removeTransactionRequest(id) {
  return fetchData(endpoints.one(id), 'DELETE',)
}

function addTransactions(file) {
  return (dispatch) => {

    dispatch({ type: transactionConstants.ADD_TRANSACTIONS });

    addTransactionsRequest(file)
      .then(
        (transactions) => {
          dispatch({
            type: transactionConstants.ADD_TRANSACTIONS_OK,
            payload: transactions
          });
        },
        error => {          
          dispatch({
            type: transactionConstants.ADD_TRANSACTIONS_ERR,
            error
          });
        }
      );
  };
}

function addTransactionsRequest(file) {
  const body = new FormData();
  body.append('file', file[0]);

  return fetchData(endpoints.all, 'POST', body)
}