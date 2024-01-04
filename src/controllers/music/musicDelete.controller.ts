import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import musicDeleteService from "../../services/music/musicDelete.service";

const musicDeleteController = async (req: Request, res: Response) => {
    try {
        const {id} = req.body

        const music = await musicDeleteService(id)

        return res.status(204).json({message: "Music deleted with success"})
    } catch (err) {
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}

export default musicDeleteController