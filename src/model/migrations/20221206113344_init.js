/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.up = function (knex) {
	return knex.schema.createTable("user", (table) => {
		table.increments("id");
		table.string("email").notNullable().unique();
		table.string("password").notNullable();
		table.string("name").notNullable();
		table.integer("age").notNullable();
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.down = function (knex) {
	return knex.schema.dropTable("user");
};
