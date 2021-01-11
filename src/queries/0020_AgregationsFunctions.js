/**
 * SELECT
 * max(salary) as max_salary
 * mix(salary) as mix_salary
 * avg(salary) as avg_salary
 * sum(salary) as sum_salary
 * count(salary) as count_salary
 * from users
 */
/**
 * SELECT u.first_name
 * max(salary) as max_salary
 * mix(salary) as mix_salary
 * avg(salary) as avg_salary
 * sum(salary) as sum_salary
 * count(salary) as count_salary
 * from users as u
 * left join profiles as p on user_id = u.id
 * group by u.first_name
 * order by total desc
 */
const knex = require("../config/database");
const execute = require("../utils");

const query = knex("users")
  .max("salary as max_salary")
  .min("salary as min_salary")
  .avg("salary as avg_salary")
  .sum("salary as count_salary")
  .count("salary as count_salary");

const query2 = knex("users as u")
  .max("salary as max_salary")
  .min("salary as min_salary")
  .avg("salary as avg_salary")
  .sum("salary as count_salary")
  .count("salary as count_salary")
  .leftJoin("profiles as p", "u.id", "p.user_id")
  .groupBy("u.first_name")
  .orderBy("total", "desc");

execute(query);
execute(query2);
