import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appError"
import ratingCreateService from "../../services/rating/ratingCreate.service"

const ratingCreateController = async (req: Request, res: Response) => {
    try {
        const {rating} = req.body
        const postId = req.params.post
        const {id} = req.user
        const ratingResponse = await ratingCreateService({rating, postId}, id)

        return res.status(201).json(ratingResponse)
    } catch (err) {
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}

export default ratingCreateController