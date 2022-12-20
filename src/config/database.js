import knex from "knex";
import knexFile from "../../knexfile.js";

export const database = knex(knexFile.development);