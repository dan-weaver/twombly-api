import { Note } from "./models";

export async function getNote(id: number): Promise<Note | undefined> {
  const notes = await Note.query().where("id", "=", id);
  return notes[0];
}

export async function createNote(note: {
  content: string;
  title: string;
}): Promise<Note> {
  return Note.query().insert(note);
}
