import { Application } from "express";
import singerRoutes from "./singer.routes";
import songRoutes from "./song.routes"

const routes = (app:Application) => {
    singerRoutes(app)
    songRoutes(app)
}

export default routes