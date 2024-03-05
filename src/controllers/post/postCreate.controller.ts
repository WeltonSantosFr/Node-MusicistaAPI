import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appError"
import { PostRequest } from "../../interface/post"
import postCreateService from "../../services/post/postCreate.service"

const postCreateController = async (req: Request,res: Response) => {
    try {
        const {title, content} = req.body
        const {id} = req.user
        const post = await postCreateService({title, content}, id)
        return res.status(201).json(post)
    } catch (err) {
        if(err instanceof AppError) {
            handleError(err, res)
        }
    }
}

export default postCreateController