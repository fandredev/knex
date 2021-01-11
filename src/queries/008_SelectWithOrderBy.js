/**
 * select id, first_name, email as uemail
 * from users
 * where id between 100 and 150
 * order by first_name desc
 */

const knex = require("../config/database");
const execute = require("../utils");
const query = knex("users")
  .select("id", "first_name", "email as uemail")
  .whereBetween("id", [100, 150])
  .orderBy("first_name", "desc");

execute(query);
