export interface Comment {
    post: string;
    author: string;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface CommentRequest {
    postId: string;
    comment: string;
}