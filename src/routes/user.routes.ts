import { Router } from "express";
import userCreateController from "../controllers/user/userCreateController";

const routes = Router();

export const userRoutes = () => {
  routes.post("/", userCreateController);
  routes.get("/");
  routes.patch("/");
  routes.delete("/");
  routes.post("/login");

  return routes;
};
