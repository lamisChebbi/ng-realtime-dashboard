import { ITransaction } from 'src/app/models/Transaction.model';

export interface ITransactionState {
  transactions: ITransaction[];
}

export const initialTransactionState: ITransactionState = {
  transactions: null
}
;
