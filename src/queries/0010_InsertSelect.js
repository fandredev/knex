/*
  -- insert select
  -- Insere valores em uma tabela usando outra.

  insert into profiles(bio, description, user_id)
  select concat('Bio de ', first_name),
  concat('Description de ', ' ', first_name) id from users

*/

const knex = require("../config/database");
const execute = require("../utils");

const insert = knex(
  knex.raw("?? (??, ??, ??)", ["profiles", "bio", "description", "user_id"]),
).insert(qb => {
  qb.from("users").select(
    knex.raw('concat("Bio de ", ??)', ["first_name"]),
    knex.raw("concat('Description de', ' ', first_name')"),
    "id",
  );
});
execute(insert);
