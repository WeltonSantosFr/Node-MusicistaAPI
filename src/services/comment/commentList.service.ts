import { AppDataSource } from "../../data-source"
import { Comment } from "../../entities/comment.entity"

const commentListService = async (postId: string) => {
    
    const commentRepository = AppDataSource.getRepository(Comment)
    
    const comments = await commentRepository.find({where: {post:{id:postId}}})
    
    return comments
}

export default commentListService