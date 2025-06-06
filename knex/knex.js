// knex.js
const knex = require('knex')({
  client: 'pg',
  connection: {
    host:"localhost",
    user:"UserSQL",
    port:5432,
    password:"Abhik@0987",
    database:"curd",
  }
})

module.exports = knex
