export interface Trade {
    type: string,
    accountID: number,
    progress: number,
    status: string,
    cutOff: string,
    valueDate: Date,
    currency: string,
    amount: number,
    transactionID: number,
    beneficiary: string,
    notional: number,
    coupon: number,
}
