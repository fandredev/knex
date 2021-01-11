/*
  select * from users where
  created_at between '2020-06-12 00:00:00'
  and '2020-09-04 23:59:59'
  and id between 80 and 83'
*/

const knex = require("../config/database");
const execute = require("../utils");
const from = "2020-06-12 00:00:00";
const to = "2021-09-04 23:59:59";

const between = knex("users")
  .whereBetween("created_at", [from, to])
  .andWhereBetween("id", [80, 83]);

execute(between);
