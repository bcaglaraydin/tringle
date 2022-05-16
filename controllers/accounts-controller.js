global.accounts = []

export const getAccounts = (req, res) => {
    res.status(200).send(accounts);
}

export const createAccount = (req, res) => {

    const account = req.body;

    let valid_curr = ["TRY", "USD", "EUR"]
    if (!valid_curr.includes(account.currencyCode)) {
        res.status(400).send("Error: Invalid Currency!");
    }

    let valid_type = ["individual", "corporate"]
    if (!valid_type.includes(account.accountType)) {
        res.status(400).send("Error: Invalid account type!");
    }

    if (accounts.some(acc => acc.accountNumber === account.accountNumber)) {
        res.status(400).send("Error: accountNumber should be unique!");
    }

    if (isNaN(account.accountNumber)) {
        res.status(400).send("Error: accountNumber should be an integer!");
    }

    accounts.push({ ...account, balance: 0 });
    res.status(200).send();
};

export const getAccount = (req, res) => {

    const accountNumber = req.params.accountNumber;
    const account = accounts.find(acc => acc.accountNumber === accountNumber)

    if (account) {
        console.log(account)
        res.status(200).send(account)
    }
    else {
        res.status(400).send("Error: account does not exist!")
    }

};


