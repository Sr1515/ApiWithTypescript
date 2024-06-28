import SingerController from "../controllers/singerController";
import { Application } from "express-serve-static-core";

const singerRoutes = (app: Application) => {   
    app.post("/singer", SingerController.store)
    app.get("/singer", SingerController.index)
    app.get("/singer/:id", SingerController.show)
    app.put("/singer/:id", SingerController.update)
    app.delete("/singer/:id", SingerController.delete)
}

export default singerRoutes