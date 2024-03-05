import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import commentUpdateService from "../../services/comment/commentUpdate.service";

const commentUpdateController = async (req:Request, res:Response) => {
    try {
        const id = req.params.comment
        const userId = req.user.id
        const {content} = req.body

        const comment = await commentUpdateService(content, id, userId)

        return res.status(200).json(comment)
    } catch (err) {
        if(err instanceof AppError) {
            handleError(err, res)
        }
    }
}

export default commentUpdateController