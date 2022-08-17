import connection from "../dbStrategy/postgreSQL.js";

async function postCake(name,price,image,description){
  
  return await connection.query(`
    INSERT INTO cakes 
    (name,price,image,description)
    VALUES ($1,$2,$3,$4)`,
    [name,price,image,description])
      
}

async function postClient(name,address,phone){
  return await connection.query(`
  INSERT INTO clients 
  (name,address,phone)
  VALUES ($1,$2,$3)`,
    [name,address,phone]
  )
}

const insertRepository = {
  postCake,
  postClient
}

export default insertRepository