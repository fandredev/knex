/**
 * Agrupar valores - Order by
 *
 * select first_name, count(id) as total from users
 * group by first_name
 * order by total desc
 *
 * select u.first_name, count(u.id) as total
 * from users as u left join profiles as p
 * on p.user_id = u.id
 * where u.id in (617, 539, 537, 611)
 * group by first_name
 * order by total desc
 * limit 5
 */

const knex = require("../config/database");
const execute = require("../utils");

const query = knex("users")
  .select("first_name")
  .count("id as total")
  .groupBy("first_name")
  .orderBy("total", "desc");

const queries = knex("users as u")
  .select("u.first_name")
  .count("u.id as total")
  .leftJoin("profiles as p", "u.id", "p.user_id")
  .whereIn("u.id", [617, 539, 537, 611])
  .groupBy("first_name")
  .orderBy("total", "desc")
  .limit(5)
  .offset(0);

execute(queries);
execute(query);
