import * as db from "../db";

export class User extends db.Model {
  public id: number;
  public first_name?: string;
  public last_name?: string;
  public username: string;
  static get tableName() {
    return "users";
  }
}
