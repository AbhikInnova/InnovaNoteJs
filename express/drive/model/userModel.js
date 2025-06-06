const knex=require('../db/knex.js')

module.exports={
    getAllusers(){
        return knex('knexuser1').select('*')
    },
    getUserById(id){
        return knex('knexuser1').where({id}).select('*')
    },
    createUser(user){
        return knex('knexuser1').insert(user).returning('*')
    },
    updateUser(id,password){        
        return knex('knexuser1').where({id}).update({password,updated_at:knex.fn.now()}).returning('*')
    },
    deleteUser(id){
    return knex('knexuser1').where({id}).del(); 
    },
    softDelete(id){
        console.log(id)
        return knex('knexuser1').where({id}).update({is_deleted:true,updated_at:knex.fn.now()}).returning('*')
    }
}