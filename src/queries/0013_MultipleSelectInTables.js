const knex = require("../config/database");

const select = knex
  .from(knex.raw("?? as ??, ?? as ??", ["users", "u", "profiles", "p"]))
  .select("u.id as uid", "p.id as pid", "p.bio", "u.first_name")
  .where("u.id", "=", knex.raw("??", ["p.user_id"]));

if (select) {
  select
    .then(response => {
      if (response) console.log(response);
    })
    .catch(e => console.log(e.message, "Error..."))
    .finally(() => knex.destroy());
}
