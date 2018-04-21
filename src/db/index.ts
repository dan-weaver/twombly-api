import * as Knex from "knex";
import knexConfig from "../../knexfile";
import * as Objection from "objection";
const knex: Knex = Knex(knexConfig.development);
export default knex;

Objection.Model.knex(knex);
export const Model = Objection.Model;
