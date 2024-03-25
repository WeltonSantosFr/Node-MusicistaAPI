import { AppDataSource } from "../../data-source"
import { Comment } from "../../entities/comment.entity"
import { Post } from "../../entities/post.entity"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"
import { CommentRequest } from "../../interface/comment"

const commentCreateService = async ({comment, postId}:CommentRequest, id:string) => {
    const commentRepository = AppDataSource.getRepository(Comment)
    const postRepository = AppDataSource.getRepository(Post)
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({where:{id}})
    const post = await postRepository.findOne({where:{id:postId}})


    if(!user) {
        throw new AppError(404, "User not found")
    }
    if(!user.isActive) {
        throw new AppError(404, "User not found")
    }
    if(!post) {
        throw new AppError(404, "Post not found")
    }

    const newComment = new Comment()
    newComment.comment = comment
    newComment.author = user
    newComment.post = post
    await commentRepository.save(newComment)
    

    return newComment
}

export default commentCreateService