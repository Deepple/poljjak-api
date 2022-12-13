const kenx = require("../config/database");

const getUsers = () => {
	return kenx("user");
};

module.exports = {
	getUsers,
};
