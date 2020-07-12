import { ITransactionState, initialTransactionState } from './cash.state';

export interface IAppState {
  transactions: ITransactionState;
}

export const initialAppState: IAppState = {
  transactions: initialTransactionState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
