import knex from "./";
import * as fs from "fs";

export function dropDatabase(): Promise<void> {
  return new Promise(function(res, rej) {
    fs.unlink("./twombly.db", err => {
      res();
    });
  });
}

export function seedDatabase(seedName: string) {}
export function refreshDatabase() {
  return dropDatabase().then(() => {
    knex.migrate.latest();
  });
}
