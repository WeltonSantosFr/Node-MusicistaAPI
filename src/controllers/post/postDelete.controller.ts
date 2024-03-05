import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import postDeleteService from "../../services/post/postDelete.service";

const postDeleteController = async (req: Request, res: Response) => {
    try {
        const postId  = req.params.post

        await postDeleteService(postId)

        return res.status(200).json({ message: "Post deleted with success" })
    } catch (err) {
        if(err instanceof AppError) {
            handleError(err, res)
        }
    }

}

export default postDeleteController