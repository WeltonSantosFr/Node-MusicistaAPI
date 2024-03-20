import { AppDataSource } from "../../data-source"
import { Post } from "../../entities/post.entity"

const postUserListService = async (userId:string) => {
    const postRepository = AppDataSource.getRepository(Post)

    const posts = await postRepository.findBy({author:{id: userId}})

    return posts
}

export default postUserListService