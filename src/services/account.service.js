const knex = require("../config/database");

const getAccount = () => {
	return knex("account");
};

const createAccount = ({account_name, password}) => {
	return knex("account").returning(["id", "account_name"]).insert({
		account_name: account_name,
		password: password,
	});
};

module.exports = {
	getAccount,
	createAccount,
};
