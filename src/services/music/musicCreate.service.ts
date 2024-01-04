import { AppDataSource } from "../../data-source"
import { Music } from "../../entities/music.entity"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"
import { MusicRequest } from "../../interface/music"

const musicCreateService = async ({songName, artist, difficulty, data, userId}: MusicRequest) => {
    const userRepository = AppDataSource.getRepository(User)
    const musicRepository = AppDataSource.getRepository(Music)

    const user = await userRepository.findOneBy({id: userId})

    if (!user) {
        throw new AppError(404, "User not found");
      }
    
      if (!user.isActive) {
        throw new AppError(404, "User not found");
      }

    console.log(data)

    const newMusic = new Music()
    newMusic.songName = songName
    newMusic.artist = artist
    newMusic.difficulty = difficulty
    newMusic.data = data
    newMusic.user = user

    await musicRepository.save(newMusic)

    return newMusic
}

export default musicCreateService