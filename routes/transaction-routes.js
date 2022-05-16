import express from 'express';

import { makePayment, makeDeposit, makeWithdraw, getTransactions } from '../controllers/transactions-controller.js';

const transactionRouter = express.Router();

transactionRouter.post('/payment', makePayment);

transactionRouter.post('/deposit', makeDeposit);

transactionRouter.post('/withdraw', makeWithdraw);

transactionRouter.get('/accounting/:accountNumber', getTransactions);

export default transactionRouter;