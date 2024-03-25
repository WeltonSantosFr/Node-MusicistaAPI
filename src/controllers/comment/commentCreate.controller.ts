import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import commentCreateService from "../../services/comment/commentCreate.service";

const commentCreateController = async (req: Request, res: Response) => {
    try {
        const { comment } = req.body
        const postId = req.params.post
        const { id } = req.user
        const commentResponse = await commentCreateService({ comment, postId }, id)
        return res.status(201).json(commentResponse)

    } catch (err) {
        if (err instanceof AppError) {
            handleError(err, res)
        }
    }
}

export default commentCreateController