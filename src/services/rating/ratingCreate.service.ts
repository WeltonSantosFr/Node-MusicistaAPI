import { AppDataSource } from "../../data-source"
import { Post } from "../../entities/post.entity"
import { Rating } from "../../entities/rating.entity"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"
import { RatingRequest } from "../../interface/rating"

const ratingCreateService = async ({ rating, postId }: RatingRequest, id: string) => {
    const postRepository = AppDataSource.getRepository(Post)
    const userRepository = AppDataSource.getRepository(User)
    const ratingRepository = AppDataSource.getTreeRepository(Rating)

    const user = await userRepository.findOne({ where: { id: id } })
    const post = await postRepository.findOne({ where: { id: postId } })

    if (!user) {
        throw new AppError(404, "User not found")
    }
    if (!user.isActive) {
        throw new AppError(404, "User not found")
    }
    if (!post) {
        throw new AppError(404, "Post not found")
    }

    const oldRating = await ratingRepository.findOne({ where: { post: { id: postId }, author:{id:id} } })

    if (oldRating === null) {
        const newRating = new Rating()
        newRating.rating = rating
        newRating.author = user
        newRating.post = post
        await ratingRepository.save(newRating)

        const response = {
            id: newRating.id,
            rating: newRating.rating,
            createdAt: newRating.createdAt,
            updatedAt: newRating.updatedAt,
            authorId: newRating.author.id,
            postId: newRating.post.id,
        }
        return response
    }
    
    if (oldRating !== null && oldRating.rating === rating) {
        await ratingRepository.delete(oldRating.id)
        return true
    }

    if (oldRating !== null && oldRating.rating !== rating) {
        const newRating = new Rating()
        newRating.rating = rating
        newRating.author = user
        newRating.post = post
        await ratingRepository.update(oldRating.id, newRating)
        const response = {
            id: newRating.id,
            rating: newRating.rating,
            createdAt: newRating.createdAt,
            updatedAt: newRating.updatedAt,
            authorId: newRating.author.id,
            postId: newRating.post.id,
        }
        return response
    }
}

export default ratingCreateService