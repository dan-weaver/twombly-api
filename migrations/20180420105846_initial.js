var Promise = require("bluebird");
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("users", t => {
      t
        .increments("id")
        .unsigned()
        .primary();
      t.string("first_name").nullable();
      t.string("last_name").nullable();
    }),
    knex.schema.createTable("notes", t => {
      t
        .increments("id")
        .unsigned()
        .primary();
      t.string("title").notNull();
      t.text("content").nullable();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("users"),
    knex.schema.dropTable("notes")
  ]);
};
