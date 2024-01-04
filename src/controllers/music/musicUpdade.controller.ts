import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { MusicUpdate } from "../../interface/music";
import musicUpdateService from "../../services/music/musicUpdade.service";

const musicUpdadeController = async (req: Request, res: Response) => {
    try {
        const {songName,artist,difficulty,data,id}: MusicUpdate = req.body
        
        const music = await musicUpdateService({songName,artist,difficulty,data,id})
        return res.status(200).send(music)
    } catch (err) {
        if(err instanceof AppError) {
            handleError(err, res)
        }
    }
}

export default musicUpdadeController