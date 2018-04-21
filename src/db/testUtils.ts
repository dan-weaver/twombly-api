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

export function seedDatabase(seedName: string) {}
export function refreshDatabase() {
  return dropDatabase().then(() => {
    console.log("dropped table");
    return knex.migrate.latest();
  });
}
