const environment='development'
const config=require('../knexfile')[environment]
const knex=require('knex')(config)
knex.raw('SELECT 1')
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.error('Database connection failed:', err.message);
    process.exit(1); 
  });


module.exports=knex;