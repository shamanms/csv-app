import { transactionConstants as ActionTypes } from '../actions/transactions';
  
export const initial = {
  isFetching: false,
  list: []
};
  
export default function (state = initial, action) {

  switch (action.type) {
    case ActionTypes.GET_TRANSACTIONS:
    case ActionTypes.REMOVE_TRANSACTION:
    case ActionTypes.ADD_TRANSACTIONS:
      return {
        ...state,
        isFetching: true,
      };

    case ActionTypes.GET_TRANSACTIONS_OK:
    case ActionTypes.REMOVE_TRANSACTION_OK:
    case ActionTypes.ADD_TRANSACTIONS_OK:
      return {
        ...state,
        isFetching: false,
        list: action.payload,
      };

    case ActionTypes.GET_TRANSACTIONS_ERR:
    case ActionTypes.REMOVE_TRANSACTION_ERR:
    case ActionTypes.ADD_TRANSACTIONS_ERR:
      return {
        ...state,
        isFetching: false
      };

    default:
      return state;
  }
};