import { initialTransactionState, ITransactionState } from '../state/cash.state';
import * as cashActions from '../actions/cash.action';

export function transactionsReducers (state= initialTransactionState, action: cashActions.TransactionActions):
  ITransactionState {
    switch (action.type) {
   case (cashActions.GET_TRANSATIONS_SUCCESS): {
    return {...state, transactions: action.payload.data};
   }
    default: return state;
  }
};
