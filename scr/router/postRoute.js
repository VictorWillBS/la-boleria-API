import { Router } from "express";
import { postCake } from "../controller/postCakeController.js";
import { validSchema } from "../middleWare/validSchema.js";
import postCakeSchema from "../schemas/postCakeSchema.js";

const postRoute = Router()

postRoute.post("/cakes",validSchema(postCakeSchema),postCake)

export default postRoute