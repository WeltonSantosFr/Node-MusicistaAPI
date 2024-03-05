import { AppDataSource } from "../../data-source"
import { Post } from "../../entities/post.entity"

const postListService = async () => {
    const postRepository = AppDataSource.getRepository(Post)

    const posts = await postRepository.find()

    return posts
}

export default postListService