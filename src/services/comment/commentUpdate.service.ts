import { AppDataSource } from "../../data-source"
import { Comment } from "../../entities/comment.entity"
import { AppError } from "../../errors/appError"

const commentUpdateService = async (content:string, id:string, userId:string) => {
    const commentRepository = AppDataSource.getRepository(Comment)

    const comment = await commentRepository.findOne({where: {id, author: {id: userId}}})

    if(!comment) {
        throw new AppError(404, "Comment not found")
    }

    await commentRepository.update(id, {
        comment: content? content : comment.comment
    })
    const updatedComment = await commentRepository.findOne({where: {id, author: {id: userId}}})
    return updatedComment
}

export default commentUpdateService