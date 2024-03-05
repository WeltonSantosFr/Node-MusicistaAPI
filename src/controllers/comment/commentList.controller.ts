import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import commentListService from "../../services/comment/commentList.service";

const commentListController = async (req:Request, res:Response) => {
    try {
        const postId = req.params.post
        const comments = await commentListService(postId)

        return res.status(200).json(comments)
    } catch (err) {
        if(err instanceof AppError) {
            handleError(err, res)
        }
    }
}

export default commentListController