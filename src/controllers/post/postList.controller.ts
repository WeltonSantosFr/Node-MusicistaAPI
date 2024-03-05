import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import postListService from "../../services/post/postList.service";

const postListController = async (req:Request,res: Response) => {
    try {
        const posts = await postListService()

        return res.status(200).json(posts)
    } catch (err) {
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}

export default postListController