import knex from "./";
import * as fs from "fs";

export function dropDatabase(): Promise<void> {
  return new Promise(function(res, rej) {
    fs.unlink("./twombly.db", err => {
      if (err) {
        rej(err);
      }
      res();
    });
  });
}

export function seedDatabase(seedName: string) {}
