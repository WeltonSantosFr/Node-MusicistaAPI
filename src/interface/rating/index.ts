export interface Rating {
    post:string
    author:string
    rating:string
    createdAt:Date
    updatedAt:Date
}

export interface RatingRequest {
    rating:string
    postId:string
}