import { Application } from "express";
import SongController from "../controllers/songController";

const songRoutes = (app: Application) => {
    app.post("/song", SongController.store)
    app.get("/song", SongController.index)
}

export default songRoutes