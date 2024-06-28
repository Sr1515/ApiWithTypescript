import { Application } from "express";
import SongController from "../controllers/songController";

const songRoutes = (app: Application) => {
    app.post("/song", SongController.store)
    app.get("/song", SongController.index)
    app.get("/song/:id", SongController.show)
    app.put("/song/:id", SongController.update)
    app.delete("/song/:id", SongController.delete)
}

export default songRoutes