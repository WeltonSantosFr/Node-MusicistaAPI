import { Router } from "express";
import userCreateController from "../controllers/user/userCreate.controller";
import userListController from "../controllers/user/userList.controller";
import userUpdateController from "../controllers/user/userUpdate.controller";
import tokenAuthMiddleware from "../middlewares/tokenAuth.middleware";
import userDeleteController from "../controllers/user/userDelete.controller";
import userLoginController from "../controllers/user/userLogin.controller";

const routes = Router();

export const userRoutes = () => {
  routes.post("/", userCreateController);
  routes.get("/", userListController);
  routes.patch("/", tokenAuthMiddleware, userUpdateController);
  routes.delete("/", tokenAuthMiddleware, userDeleteController);
  routes.post("/login", userLoginController);

  return routes;
};
