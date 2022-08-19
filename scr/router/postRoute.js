import { Router } from "express";
import { postCake } from "../controller/posts/postCakeController.js";
import { postClients } from "../controller/posts/postClientController.js";
import { postOrder } from "../controller/posts/postOrderController.js";
import { validSchema } from "../middleWare/validSchema.js";
import postCakeSchema from "../schemas/postCakeSchema.js";
import postClientSchema from "../schemas/postClientSchema.js";
import postOrderSchema from "../schemas/postOrderSchema.js";
const postRoute = Router()

postRoute.post("/cakes",validSchema(postCakeSchema),postCake)
postRoute.post("/clients",validSchema(postClientSchema),postClients)
postRoute.post("/order",validSchema(postOrderSchema),postOrder)
export default postRoute