const knex = require("../config/database");

module.exports = async value => {
  return await value
    .then(response =>
      console.log("Resposta:", value.toSQL().toNative(), response),
    )
    .catch(e => console.log(e.message))
    .finally(() => knex.destroy());
};
