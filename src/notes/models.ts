import * as db from "../db";

export class Note extends db.Model {
  public content: string;
  public title: string;
  static get tableName() {
    return "notes";
  }
}
