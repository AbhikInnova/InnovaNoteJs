// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
exports.up = function(knex) {
  return knex.schema.createTable('knexuser1',(table)=>{
    table.increments('id').primary();
    table.string('username').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable()
    table.timestamps(true,true);//created_at-updated_at
  })
};

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
exports.down = function(knex) {
  return knex.schema.dropTable('knexuser1')
};


