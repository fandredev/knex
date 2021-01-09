module.exports = {
    client: 'mysql2',
    connection: {
      database: 'knexbase',
      user:     'root',
      password: 'rootpassword'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
