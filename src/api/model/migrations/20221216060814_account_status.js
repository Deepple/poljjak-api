exports.up = function (knex) {
	return knex.schema.createTable("account_status", (table) => {
		table.increments();
		table.string("name").notNullable();
		table.string("description").notNullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("account_status");
};
