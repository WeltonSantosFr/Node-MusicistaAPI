import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import postUpdateService from "../../services/post/postUpdate.service";

const postUpdateController = async (req:Request,res:Response) => {
    try {
        const {postId} = req.params
        const {title, content} = req.body
        const post = await postUpdateService({title, content}, postId)
        return res.status(200).json(post)
    } catch (err) {
        if(err instanceof AppError) {
            handleError(err, res)
        }
    }
}

export default postUpdateController