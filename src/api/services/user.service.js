import {database} from "../../config/database.js";

const getUsers = () => {
	return database("account");
};

const createUser = ({account_name, password}) => {
	return database("account").returning(["id", "account_name"]).insert({
		account_name: account_name,
		password: password,
	});
};

export const userService = {
	getUsers,
	createUser,
};
