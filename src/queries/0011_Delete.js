/**
 * Delete apaga registros da tabela
 *
 * delete from users where id = 115
 *
 * -- Use select para garantir que está apagando dados corretos.
 *
 * select * from users where id between 110 and 115
 */

const knex = require("../config/database");
const execute = require("../utils");

const deleteQuery = knex("users").delete().whereBetween("id", [30, 35]);

execute(deleteQuery);
