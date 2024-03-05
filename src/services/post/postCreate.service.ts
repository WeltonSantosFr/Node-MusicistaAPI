import { AppDataSource } from "../../data-source";
import { Post } from "../../entities/post.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { PostRequest } from "../../interface/post";

const postCreateService = async ({title, content}: PostRequest, id:string) => {
    const postRepository = AppDataSource.getRepository(Post)
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({id})

    if(!user) {
        throw new AppError(404, "User not found")
    }

    if(!user.isActive) {
        throw new AppError(404, "User not found")
    }

    const newPost = new Post()
    newPost.author = user,
    newPost.title = title,
    newPost.content = content,
    await postRepository.save(newPost)
    
    return newPost
}

export default postCreateService