/*
  -- like (parecido)
  -- % qualquer coisa
  -- _ um caractere

  select * from users where first_name like '%ma%_'
*/

const knex = require('../config/database')

const query = knex('users')
.select('*')
.where('first_name', 'like', '%ma%_')
.orWhere('id', '>', 50)

console.log(query.toSQL().toNative())
console.log(query.toString())

query.then(response => {
  if(response) console.log(response)
}).catch(err => console.log(err))
.finally(() => knex.destroy())
