import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { transactionsReducers } from './cash.reducer';

export const appReducers: ActionReducerMap<IAppState,any> = {
  transactions: transactionsReducers
};

