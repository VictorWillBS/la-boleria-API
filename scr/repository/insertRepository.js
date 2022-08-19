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

async function postOrder(clientId,cakeId,quantity,totalPrice,timestamp){
  return await connection.query(`
  INSERT INTO orders
  ("clientId","cakeId","quantity","totalPrice","createdAt")
  VALUES ($1,$2,$3,$4,to_timestamp($5/1000.0))`,
    [clientId,cakeId,quantity,totalPrice,timestamp]
  )
}

const insertRepository = {
  postCake,
  postClient,
  postOrder
}

export default insertRepository