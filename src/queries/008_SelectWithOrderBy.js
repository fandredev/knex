/**
 * select id, first_name, email as uemail
 * from users
 * where id between 100 and 150
 * order by first_name desc
 */

const knex = require("../config/database");


const query = knex('users')
.select('id', 'first_name', 'email as uemail')
.whereBetween('id', [100, 150])
.orderBy('first_name', 'desc')


console.log(query.toString())

query.then(response => {
  if(response) console.log(response)
}).catch(err => console.log(err))
.finally(() => knex.destroy())

