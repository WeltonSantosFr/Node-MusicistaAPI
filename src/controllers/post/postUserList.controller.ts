import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import postUserListService from "../../services/post/postUserList.service";

const postUserListController = async (req:Request,res: Response) => {
    try {
        const userId = req.user.id
        const posts = await postUserListService(userId)

        return res.status(200).json(posts)
    } catch (err) {
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}

export default postUserListController