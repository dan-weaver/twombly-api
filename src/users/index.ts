import * as UserModels from "./models";

interface PartialUser {
  first_name?: string;
  last_name?: string;
  username: string;
}

export function createUser(user: PartialUser) {
  return UserModels.User.query().insert(user);
}

export function getAllUsers() {
  return UserModels.User.query();
}
