const knex = require('../config/database')


const select = knex('users as u').select('email as uemail', 'id as uid')

select.then(data => {
  for(const user of data) {
    console.log(user)
  }
  console.log(select.toString())
}).catch(e => console.log(e.message))
.finally(() => {
  knex.destroy()
})
