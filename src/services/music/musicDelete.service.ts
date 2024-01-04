import { AppDataSource } from "../../data-source"
import { Music } from "../../entities/music.entity"
import { AppError } from "../../errors/appError"

const musicDeleteService = async (id:string) => {
    const musicRepository = AppDataSource.getRepository(Music)

    const music = await musicRepository.findOneBy({id})

    if(!music) {
        throw new AppError(404, "Music not found")
    }

    await musicRepository.delete(id)

    return true
}

export default musicDeleteService