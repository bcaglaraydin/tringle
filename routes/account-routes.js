import express from 'express';

import { getAccounts, createAccount, getAccount } from '../controllers/accounts-controller.js';

const accountRouter = express.Router();

accountRouter.get('/', getAccounts);

accountRouter.post('/', createAccount);

accountRouter.get('/:accountNumber', getAccount);

export default accountRouter;