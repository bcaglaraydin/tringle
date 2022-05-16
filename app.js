import express from "express";
import bodyParser from "body-parser";

import transactionRouter from "./routes/transaction-routes.js";
import accountRouter from "./routes/account-routes.js";


const app = express();
const PORT = 5050;

app.use(bodyParser.json());

app.use("/account", accountRouter);
app.use("/", transactionRouter);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));