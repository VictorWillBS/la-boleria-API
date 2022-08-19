import express, {json}from "express"
import cors from "cors"
import dotenv from "dotenv"
import chalk from "chalk"
import postRoute from "./router/postRoute.js"
import getRoute from "./router/getRoute.js"
dotenv.config()
const app = express()

app.use(json())
app.use(cors())

app.use(postRoute)
app.use(getRoute)

app.listen(process.env.PORT,()=> console.log(chalk.green.bold("servidor online na porta " + process.env.PORT)))