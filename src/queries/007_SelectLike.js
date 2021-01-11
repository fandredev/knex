/*
  -- like (parecido)
  -- % qualquer coisa
  -- _ um caractere

  select * from users where first_name like '%ma%_'
*/

const knex = require("../config/database");
const execute = require("../utils");

const query = knex("users")
  .select("*")
  .where("first_name", "like", "%ma%_")
  .orWhere("id", ">", 50);

execute(query);
