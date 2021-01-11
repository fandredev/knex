/**
 * -- Update: Atualiza registros
 *
 * update users set first_name='Luiz', last_name='Miranda'
 * where id = 29
 *
 * select * from users where id = 29
 */

const knex = require("../config/database");

const object = Object.freeze({
  first_name: "Luiz",
  last_name: "Miranda",
});

const select = knex.from("users").where({ id: 29 });
const update = knex("users").update(object).where({ id: 29 });

console.log(update.toString());

if (update && select) {
  update
    .then(response => {
      if (response) console.log(response);
    })
    .catch(e => console.log(e.message, "Error..."))
    .finally(() => knex.destroy());
}
