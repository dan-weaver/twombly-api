import * as db from "../db";
import * as UserModels from "../users/models";

export class Question extends db.Model {
  public id: number;
  public content: string;
  static get tableName() {
    return "questions";
  }
}

export class Questionnaire extends db.Model {
  public id: number;
  public name: string;
  public questions: [Question];
  public creator: UserModels.User;
  static get tableName() {
    return "questionnaires";
  }
  static relationMappings = {
    creator: {
      relation: db.Model.HasOneRelation,
      modelClass: UserModels.User,
      join: {
        from: "questionnaires.creator_id",
        to: "users.id"
      }
    },
    questions: {
      relation: db.Model.HasManyRelation,
      modelClass: Question,
      join: {
        from: "questionnaires.id",
        to: "question.questionnaire_id"
      }
    }
  };
}
