import { Express } from "express";
import { userRoutes } from "./user.routes";
import { musicRoutes } from "./music.routes";

export const appRoutes = (app: Express) => {
  app.use("/user", userRoutes());
  app.use("/music", musicRoutes())
};
