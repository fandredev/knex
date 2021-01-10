
/*
  select * from users where
  where id in (110,115,120,125,130,1000,12200,1212545)
  and first_name in ('Luiz','Keelie')
*/

const knex = require('../config/database')

const selectIn = knex('users')
  .whereIn('id', [110,115,120,125,130,1000,12200,1212545])
  .whereIn('first_name', ['Luiz', 'Keelie'])


selectIn.then(response => {
  console.log(response)
}).catch(err => console.log(err.message))
.finally(() => {
  knex.destroy()
})
