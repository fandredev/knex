const knex = require('../config/database')

// 1 insert só
/*
  const data = Object.freeze({
    first_name: 'Helena',
    last_name: 'A',
    email: '1@gmail.com',
    password_hash: '1_hash',
    salary: 481.12
  })
*/

// Múltiplos inserts
const data = [{
  first_name: 'Pietra',
  last_name: 'B',
  email: '2@gmail.com',
  password_hash: '2_hash',
  salary: 581.12
}, {
  first_name: 'Felipe',
  last_name: 'C',
  email: '3@gmail.com',
  password_hash: '3_hash',
  salary: 681.12
}]

const insert = knex('users').insert(data)
//console.log(insert.toSQL().toNative())
//console.log(insert.toString())

insert
  .then(data => console.log(data))
  .catch(e => console.log('Error: ', e.message))
  .finally(() => knex.destroy())
