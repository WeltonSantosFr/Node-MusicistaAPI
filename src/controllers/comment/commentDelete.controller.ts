import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import commentDeleteService from "../../services/comment/commentDelete.service";

const commentDeleteController = async (req:Request, res:Response) => {
    try {
        const id = req.params.coment
        const userId = req.user.id

        await commentDeleteService(id, userId)

        return res.status(200).json({message:"Comment deleted with success!"})
    } catch (err) {
        if(err instanceof AppError) {
            handleError(err, res)
        }
    }
}

export default commentDeleteController