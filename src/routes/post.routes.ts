import { Router } from "express";
import postCreateController from "../controllers/post/postCreate.controller";
import tokenAuthMiddleware from "../middlewares/tokenAuth.middleware";
import postDeleteController from "../controllers/post/postDelete.controller";
import postListController from "../controllers/post/postList.controller";
import postUpdateController from "../controllers/post/postUpdate.controller";
import postUserListController from "../controllers/post/postUserList.controller";

const routes = Router()

export const postRoutes = () => {
    routes.post('/', tokenAuthMiddleware, postCreateController)
    routes.get('/', postListController)
    routes.get('/userPosts', tokenAuthMiddleware, postUserListController)
    routes.patch('/:post', tokenAuthMiddleware, postUpdateController)
    routes.delete('/:post', tokenAuthMiddleware, postDeleteController)
    return routes
}