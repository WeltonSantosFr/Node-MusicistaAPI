import { AppDataSource } from "../../data-source"
import { Music } from "../../entities/music.entity"
import { AppError } from "../../errors/appError"
import { MusicUpdate } from "../../interface/music"

const musicUpdateService = async ({id, songName, artist, data, difficulty}:MusicUpdate) => {
    const musicRepository = AppDataSource.getRepository(Music)

    const music = await musicRepository.findOneBy({id})

    if(!music) {
        throw new AppError(404, "Music not found")
    }

    await musicRepository.update(id, {
        songName: songName ? songName : music.songName,
        artist: artist ? artist : music.artist,
        difficulty: difficulty ? difficulty : music.difficulty,
        data: data ? data : music.data
    })
    const updatedMusic = await musicRepository.findOneBy({id})
    return updatedMusic
}

export default musicUpdateService