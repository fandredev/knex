/**
 * Delete apaga registros da tabela
 *
 * delete from users where id = 115
 *
 * -- Use select para garantir que está apagando dados corretos.
 *
 * select * from users where id between 110 and 115
 */

const knex = require('../config/database')

const deleteQuery = knex('users').delete().whereBetween('id', [30, 35])
const select = knex('users')

console.log(deleteQuery.toString())


if(select) {
  deleteQuery.then(response => {
    select.then(resp => {
      if(resp) console.log(resp)
    }).catch(err => console.log(err))

    console.log(response)
  })
  .catch(err => console.log(err))
  .finally(() => knex.destroy())
}
