import { Router } from "express";

const routes = Router();

export const userRoutes = () => {
  routes.post("/");
  routes.get("/");
  routes.patch("/");
  routes.delete("/");
  routes.post("/login");

  return routes;
};
