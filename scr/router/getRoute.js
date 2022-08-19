import { Router } from "express";
import { getOrder } from "../controller/get/getOrder.js";
import { getOrderById } from "../controller/get/getOrder.js";
import { getClientOrders } from "../controller/get/getOrder.js";
import selectRepository from "../repository/selectRepository.js";
const getRoute= Router()

getRoute.get("/orders",getOrder)
getRoute.get("/orders/:id",getOrderById)
getRoute.get("/clients/:id/orders",getClientOrders)
getRoute.get( "/teste",async(req,res)=>{
  const {rows: teste} = await selectRepository.getCakeById(17)
  res.send(teste)
})
export default getRoute