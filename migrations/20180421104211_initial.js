exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("users", userTable => {
      userTable.increments("id").primary();
      userTable.string("first_name");
      userTable.string("last_name");
      userTable.string("username");
    })
    .createTable("questionnaires", questionnaireTable => {
      questionnaireTable.increments("id").primary();
      questionnaireTable.string("name");
      questionnaireTable.integer("creator_id").references("users.id");
    });
};

exports.down = function(knex, Promise) {};
