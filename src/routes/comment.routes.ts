import { Router } from "express";
import tokenAuthMiddleware from "../middlewares/tokenAuth.middleware";
import commentCreateController from "../controllers/comment/commentCreate.controller";
import commentListController from "../controllers/comment/commentList.controller";
import commentUpdateController from "../controllers/comment/commentUpdate.controller";
import commentDeleteController from "../controllers/comment/commentDelete.controller";

const routes = Router()

export const commentRoutes = () => {
    routes.post('/:post', tokenAuthMiddleware, commentCreateController)
    routes.get('/:post', commentListController)
    routes.patch('/:comment', tokenAuthMiddleware, commentUpdateController)
    routes.delete('/:comment', tokenAuthMiddleware, commentDeleteController)
    return routes
}