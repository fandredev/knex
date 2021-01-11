/**
 * SELECT u.id as uid, p.id as pid,
 * p.bio, u.first_name from users as u
 * inner join profiles as p on u.id = p.user_id
 * where u.first_name like '%a'
 * order by u.first_name
 * limit 5
 */

const knex = require("../config/database");

const query = knex
  .from("users as u")
  .select("u.id as uid", "p.id as pid", "p.bio", "u.first_name")
  .innerJoin("profiles as p", "u.id", "p.user_id")
  .where("u.first_name", "like", "%a")
  .orWhereBetween("u.id", [1, 25])
  .orderBy("u.first_name", "desc")
  .limit(5);

async function executeAsync() {
  await query
    .then(_ => console.log(query.toSQL().toNative()))
    .catch(e => console.log(e.message))
    .finally(() => knex.destroy());
}
executeAsync();
