import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appError"
import musicCreateService from "../../services/music/musicCreate.service"

const musicCreateController = async (req: Request, res: Response) => {
    // console.log(req.body)
    try {
        if(!req.files || !req.files.data) {
            return res.status(400).send('No files were uploaded')
        }
        
        const { songName, artist, difficulty } = req.body
        const file =  req.files.data
        if(!('data' in file)) {
            return res.status(400).send("Invalid file format")
        }
        const data: Buffer = file.data
        const { id } = req.user

        

        const newMusic = await musicCreateService({
            songName,
            artist,
            data,
            difficulty,
            userId: id
        })

        return res.status(201).json(newMusic)
    } catch (err) {
        if (err instanceof AppError) {
            handleError(err, res)
        }
    }
}

export default musicCreateController