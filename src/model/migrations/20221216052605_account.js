exports.up = function (knex) {
	return knex.schema.createTable("account", (table) => {
		table.increments();
		table.string("account_name").notNullable().unique();
		table.string("password").notNullable();
		table
			.integer("account_status")
			.notNullable()
			.defaultTo(1)
			.references("id")
			.inTable("account_status");
		table.timestamps(true, true);
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("account");
};
