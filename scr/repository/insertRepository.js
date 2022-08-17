import connection from "../dbStrategy/postgreSQL.js";

async function postCake(name,price,image,description){
  
  return await connection.query(`
    INSERT INTO cakes 
    (name,price,image,description)
    VALUES ($1,$2,$3,$4)`,
    [name,price,image,description])
      
}

const insertRepository = {
  postCake
}

export default insertRepository