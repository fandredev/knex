/*
  select * from `users`
  where `created_at` = '2021-01-09 16:43:54'
  and `first_name` = 'Helena'
  and `password_hash` = '1_hash'
*/

const knex = require('../config/database')

const query = knex('users')
.select('*')
.where('created_at', '=', '2021-01-09 16:43:54')
.andWhere('first_name','=','Helena')
.andWhere('password_hash', '=', '1_hash')

console.log(query.toString())


query.then(data => console.log(data))
.catch(error => console.log(error))
.finally(() => knex.destroy())
