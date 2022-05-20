global.accounts = []

export const getAccounts = (req, res) => {
    try {
        res.status(200).send(accounts);
    } catch (error) {
        res.status(500).send(error);
    }

}

export const createAccount = (req, res) => {
    try {
        const account = req.body;

        let valid_curr = ["TRY", "USD", "EUR"]
        if (!valid_curr.includes(account.currencyCode)) {
            res.status(400).send("Error: Invalid Currency!");
            return;
        }

        let valid_type = ["individual", "corporate"]
        if (!valid_type.includes(account.accountType)) {
            res.status(400).send("Error: Invalid account type!");
            return;
        }

        if (accounts.some(acc => acc.accountNumber === account.accountNumber)) {
            res.status(400).send("Error: accountNumber should be unique!");
            return;
        }

        if (isNaN(account.accountNumber)) {
            res.status(400).send("Error: accountNumber should be an integer!");
            return;
        }

        accounts.push({ ...account, balance: "0.00" });
        res.status(200).send();
    } catch (error) {
        res.status(500).send(error);
    }


};

export const getAccount = (req, res) => {
    try {
        const accountNumber = req.params.accountNumber;
        const account = accounts.find(acc => acc.accountNumber === accountNumber)

        if (account) {
            console.log(account)
            res.status(200).send(account)
            return;
        }
        else {
            res.status(400).send("Error: account does not exist!")
            return;
        }
    } catch (error) {
        res.status(500).send(error);
    }



};


