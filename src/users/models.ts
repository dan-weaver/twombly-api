import * as db from "../db";
import { Note } from "../notes/models";

class User extends db.Model {
  static get tableName() {
    return "users";
  }
  static relationMappings = {
    likedNotes: {
      relation: db.Model.ManyToManyRelation,
      modelClass: Note,
      join: {
        from: "users.id",
        through: {
          from: "likes.user_id",
          to: "likes.note_id"
        }
      }
    }
  };
}

// class Like extends db.Model {
//   static get tableName() {
//     return "likes";
//   }

//   static relationMappings = {

//   }
// }

export default { User };
