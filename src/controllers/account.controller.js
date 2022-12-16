const {accountService} = require("../services");

const getAccount = async (req, res) => {
	const users = await accountService.getAccount();
	res.send(users);
};

const createAccount = async (req, res) => {
	const newUserId = await accountService.createAccount(req.body);
	res.send(newUserId);
};

module.exports = {
	getAccount,
	createAccount,
};
