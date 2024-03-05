import { AppDataSource } from "../../data-source"
import { Comment } from "../../entities/comment.entity"
import { Post } from "../../entities/post.entity"
import { Rating } from "../../entities/rating.entity"
import { AppError } from "../../errors/appError"

const postDeleteService = async (postId:string) => {
    const postRepository = AppDataSource.getRepository(Post)
    const commentRepository = AppDataSource.getRepository(Comment)
    const ratingRepository = AppDataSource.getRepository(Rating)
    const post = await postRepository.findOneBy({id:postId})

    if(!post) {
        throw new AppError(404, "Post not found")
    }

    const comments = (await commentRepository.find({where: {post: {id: postId}}})).map(async (comment) => await commentRepository.delete(comment.id))
    const ratings = (await ratingRepository.find({where:{post:{id: postId}}})).map(async (rating) => await ratingRepository.delete(rating.id))
    
    await postRepository.delete(postId)

    return true
}

export default postDeleteService