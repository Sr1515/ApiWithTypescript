import express from "express"
import dotenv from "dotenv"
import routes from "./routes/index.routes"

export const app = express()
dotenv.config()
app.use(express.json())
routes(app)

