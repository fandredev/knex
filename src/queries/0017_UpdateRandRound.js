/**
 * update users set salary = round(rand() * 10000, 2)
 */
const knex = require("../config/database");
const execute = require("../utils");
const update = knex("users").update({
  salary: knex.raw("round(rand() * ??, ??)", [10000, 2]),
});

console.log(update.toString());

execute(update);
