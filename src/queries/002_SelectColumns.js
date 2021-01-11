const knex = require("../config/database");
const execute = require("../utils");
const select = knex("users as u").select("email as uemail", "id as uid");

execute(select);
