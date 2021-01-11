/*
  select * from users where
  where id in (110,115,120,125,130,1000,12200,1212545)
  and first_name in ('Luiz','Keelie')
*/

const knex = require("../config/database");
const execute = require("../utils");

const selectIn = knex("users")
  .whereIn("id", [110, 115, 120, 125, 130, 1000, 12200, 1212545])
  .whereIn("first_name", ["Luiz", "Keelie"]);

execute(selectIn);
