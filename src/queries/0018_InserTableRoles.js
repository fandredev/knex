const knex = require("../config/database");
const execute = require("../utils");
const query = knex("roles").insert([
  { name: "GET" },
  { name: "POST" },
  { name: "PUT" },
  { name: "DELETE" },
]);

execute(query);
