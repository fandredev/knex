/*
  -- insert select
  -- Insere valores em uma tabela usando outra.

  insert into profiles(bio, description, user_id)
  select concat('Bio de ', first_name),
  concat('Description de ', ' ', first_name) id from users

*/

const knex = require('../config/database')

const insert = knex(
  knex.raw(
    '?? (??, ??, ??)',
    ['profiles', 'bio','description','user_id']
  )
).insert(qb => {
  qb.from('users').
  select(
    knex.raw('concat("Bio de ", ??)', ['first_name']),
    knex.raw("concat('Description de', ' ', first_name')"),
    'id'
  )
})


console.log(insert.toString())

insert.then(response => {
  if(response) console.log(response)
}).catch(err => console.log(err))
.finally(() => knex.destroy())
