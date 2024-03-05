import { Router } from "express";
import tokenAuthMiddleware from "../middlewares/tokenAuth.middleware";
import ratingCreateController from "../controllers/rating/ratingCreate.controller";

const routes = Router()

export const ratingRoutes = () => {
    routes.post('/:post', tokenAuthMiddleware, ratingCreateController)

    return routes
}