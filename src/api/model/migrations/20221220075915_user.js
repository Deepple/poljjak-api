export const up = async function (knex) {
	return knex.schema.createTable("user", (table) => {
		table.increments();
		table.string("email").notNullable().unique();
		table.string("password").notNullable();
		// table
		// 	.integer("user_status")
		// 	.notNullable()
		// 	.defaultTo(1)
		// 	.references("id")
		// 	.inTable("user_status");
		table.timestamps(true, true);
	});
};

export const down = async function (knex) {
	return knex.schema.dropTable("user");
};