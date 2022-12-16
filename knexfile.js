const path = (process.env.NODE_ENV === 'development') ? '/.env.development': '/.env.production';
require('dotenv').config({path: __dirname + `${path}`});

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: null,
      port: process.env.DB_PORT,
      host: process.env.DB_HOST
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: __dirname + '/src/model/migrations',
    },
    seeds: { directory: __dirname + '/src/model/seeds' },
  }
};