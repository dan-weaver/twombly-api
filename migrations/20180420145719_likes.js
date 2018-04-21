import { isMissingDeclaration } from "typescript";

exports.up = function(knex, Promise) {
  return knex.schema.createTable("likes", t => {
    t.increments("id");
    t
      .integer("user_id")
      .references("id")
      .inTable("users")
      .notNull();
    t
      .integer("note_id")
      .references("id")
      .inTable("notes")
      .notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("likes");
};
