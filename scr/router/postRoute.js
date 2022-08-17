import { Router } from "express";
import { postCake } from "../controller/postCakeController.js";
import { postClients } from "../controller/postClientController.js";
import { validSchema } from "../middleWare/validSchema.js";
import postCakeSchema from "../schemas/postCakeSchema.js";
import postClientSchema from "../schemas/postClientSchema.js"
const postRoute = Router()

postRoute.post("/cakes",validSchema(postCakeSchema),postCake)
postRoute.post("/client",validSchema(postClientSchema),postClients)
export default postRoute