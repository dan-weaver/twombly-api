module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./src/db/twombly.db"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "example"
    },
    pool: {
      min: 2,
      max: 10
    }
  }
};
