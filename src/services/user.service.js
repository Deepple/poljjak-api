const kenx = require("../config/database");

const getUsers = () => {
	return kenx("user").select("id", "name", "email");
};

const createUser = ({email, password, name, age}) => {
	return kenx("user").returning(["id", "age", "name", "email"]).insert({
		email: email,
		password: password,
		name: name,
		age: age,
	});
};

module.exports = {
	getUsers,
	createUser,
};
