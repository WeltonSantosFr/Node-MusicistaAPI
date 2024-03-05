import { AppDataSource } from "../../data-source"
import { Comment } from "../../entities/comment.entity"
import { AppError } from "../../errors/appError"

const commentDeleteService = async (id:string, userId:string) => {
    const commentRepository = AppDataSource.getRepository(Comment)

    const comment = await commentRepository.findOne({where: {id, author:{id:userId}}})

    if(!comment) {
        throw new AppError(404, "Comment not found")
    }

    await commentRepository.delete(comment.id)

    return true
}

export default commentDeleteService