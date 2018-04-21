import * as db from "../db";

export class User extends db.Model {
  static get tableName() {
    return "users";
  }
}
