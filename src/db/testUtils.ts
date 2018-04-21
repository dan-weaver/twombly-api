import knex from "./";
import * as fs from "fs";

export function dropDatabase(): Promise<void> {
  return new Promise(function(res, rej) {
    fs.unlink(__dirname + "/twombly.db", err => {
      if (err) {
        console.log(err);
      }
      res();
    });
  });
}

export function seedDatabase() {
  return knex.seed.run();
}
export function setupTestDb() {
  return dropDatabase().then(() => {
    return knex.migrate.latest();
  });
}
