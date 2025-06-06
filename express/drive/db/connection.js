const {Pool}=require('pg')
const con=new Pool({
 host:"localhost",
    user:"UserSQL",
    port:5432,
    password:"Abhik@0987",
    database:"abhik1",
})

// async function query(text, params) {
//   return pool.query(text, params);
// }

async function checkConnection(){
    try {
    await  con.query('select now()')
        console.log("connected db")
        return true;
    }
    catch (error) {
        console.log("DB connection failed",error.message);
        return false;
    }
}

module.exports={con,checkConnection}