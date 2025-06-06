import db from './connection.js'

export default async function checkConnection() {
   try {
    await db.raw('select 1');
    console.log("pg connected");
    return true;
   } catch (error) {
    console.log("connection failed",error.message);
    return false;
   }
}
