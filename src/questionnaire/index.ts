import { Questionnaire, Question } from "./models";

export async function getQuestionnaire(
  id: number
): Promise<Questionnaire | undefined> {
  const qs = await Questionnaire.query().where("id", "=", id);
  return qs[0];
}

export async function createQuestionnaire(
  name: string
): Promise<Questionnaire> {
  return Questionnaire.query().insert({ name: name });
}
