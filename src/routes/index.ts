import { Express } from "express";
import { userRoutes } from "./user.routes";
import { postRoutes } from "./post.routes";
import { commentRoutes } from "./comment.routes";
import { ratingRoutes } from "./rating.routes";


export const appRoutes = (app: Express) => {
  app.use("/user", userRoutes())
  app.use("/post", postRoutes())
  app.use("/comment", commentRoutes())
  app.use("/rating", ratingRoutes())
};
