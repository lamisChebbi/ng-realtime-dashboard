import {Action} from '@ngrx/store';
import { ITransaction } from 'src/app/models/Transaction.model';

export const GET_TRANSATIONS = '[Transaction] Get Transations';
export const GET_TRANSATIONS_SUCCESS = '[Transaction] Get Transations Success';


export class GetTransactions implements Action {
  public readonly type = GET_TRANSATIONS;
  constructor(public payload: any) { }

}

export class GetTransactionsSuccess implements Action {
  public readonly type = GET_TRANSATIONS_SUCCESS;
  constructor(public payload: any) { }
}

export type TransactionActions = GetTransactions | GetTransactionsSuccess;
