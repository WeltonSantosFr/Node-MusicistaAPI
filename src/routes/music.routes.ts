import { Router } from "express";
import musicCreateController from "../controllers/music/musicCreate.controller";
import tokenAuthMiddleware from "../middlewares/tokenAuth.middleware";
import musicListController from "../controllers/music/musicList.controller";
import musicUpdadeController from "../controllers/music/musicUpdade.controller";


const routes = Router();

export const musicRoutes = () => {
  routes.post("/", tokenAuthMiddleware, musicCreateController);
  routes.get("/", musicListController);
  routes.patch("/", tokenAuthMiddleware, musicUpdadeController);
  routes.delete("/", );
  routes.post("/login", );

  return routes;
};