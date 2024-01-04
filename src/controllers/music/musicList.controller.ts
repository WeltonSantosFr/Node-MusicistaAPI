import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import musicListService from "../../services/music/musicList.service";

const musicListController = async (req:Request, res:Response) => {
    try {
        const musics = await musicListService()

        return res.status(200).send(musics)
    } catch (err) {
        if(err instanceof AppError) {
            handleError(err, res)
        }
    }
}

export default musicListController