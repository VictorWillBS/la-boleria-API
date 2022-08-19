import connection from "../dbStrategy/postgreSQL.js";

async function getCakeByName (name){
  return await connection.query(`
    Select * from cakes
    WHERE name = $1;
  `,[name])
}

async function getCakeById (cakeId){
  return await connection.query(`
    SELECT * FROM cakes
    WHERE id = $1;
  `,[cakeId])
}

async function getClientById (clientId){
  return await connection.query(`
    SELECT * FROM clients
    WHERE id = $1;
  `,[clientId])
}

async function getOrder (date,limiteDate){

  if(date){
   
    return await connection.query(`
    SELECT to_json(clients.*) AS client, to_json(cakes.*) AS cake,orders.* from orders
    INNER JOIN clients ON 
    clients.id = orders."clientId"
    INNER JOIN cakes ON 
    cakes.id = orders."cakeId"
    WHERE orders."createdAt">TIMESTAMP '${date}' AND orders."createdAt"<TIMESTAMP '${limiteDate}'  
    ORDER BY orders."createdAt";
    `,)
  }
  
  return await connection.query(
    `
  SELECT to_json(clients.*) AS client, to_json(cakes.*) AS cake,orders.* from orders
  INNER JOIN clients ON 
  clients.id = orders."clientId"
  INNER JOIN cakes ON 
  cakes.id = orders."cakeId"
  ORDER BY orders."createdAt";
  `
  )
}

async function getOrderbyId(id){
  return await connection.query(`
  SELECT to_json(clients.*) AS client, to_json(cakes.*) AS cake,orders.* from orders
  INNER JOIN clients ON 
  clients.id = orders."clientId"
  INNER JOIN cakes ON 
  cakes.id = orders."cakeId"
  WHERE orders.id=$1
  ORDER BY orders."createdAt";
  `,[id])
}

async function getClientOrders(id){
  return await connection.query(`
  SELECT orders.* from orders
  INNER JOIN clients ON 
  clients.id = orders."clientId"
  INNER JOIN cakes ON 
  cakes.id = orders."cakeId"
  WHERE clients.id=$1
  ORDER BY orders."createdAt"
  `,[id])
}
const selectRepository = {
  getCakeByName,
  getCakeById,
  getClientById,
  getOrder,
  getOrderbyId,
  getClientOrders
}

export default selectRepository