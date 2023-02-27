module.exports = {
  client: "pg",
  connection: process.env.DB_URL || {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 5432,
    database: "pokedex",
    user: "postgres",
    password: "220918",
  },
  migrations: {
    disableMigrationsListValidation: true,
    directory: "./db/migrations",
  },
  seeds: {
    directory: "./db/seeds",
  },
};
