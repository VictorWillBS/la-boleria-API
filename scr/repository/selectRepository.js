import connection from "../dbStrategy/postgreSQL.js";

async function getCakeByName (name){
  return await connection.query(`
    Select * from cakes
    WHERE name = $1
  `,[name])
}

const selectRepository = {
  getCakeByName
}

export default selectRepository