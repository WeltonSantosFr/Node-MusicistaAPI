import { AppDataSource } from "../../data-source";
import { Post } from "../../entities/post.entity";
import { AppError } from "../../errors/appError";
import { PostUpdate } from "../../interface/post";

const postUpdateService = async ({ title, content }: PostUpdate, postId: string) => {
    
    const postRepository = AppDataSource.getRepository(Post)

    const post = await postRepository.findOneBy({ id: postId })

    if (!post) {
        throw new AppError(404, "Post not found")
    }

    await postRepository.update(post.id, { title: title ? title : post.title, content: content ? content : post.content })    
    
    const updatedPost = await postRepository.findOneBy({id: postId})

    return updatedPost
}

export default postUpdateService