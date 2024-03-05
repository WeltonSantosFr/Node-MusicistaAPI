import { Comment } from "../../entities/comment.entity";


export interface Post {
    author: string;
    title: string;
    content: string;
    rating: string;
    comments: Comment[];
    createdAt: Date;
    updatedAt: Date;
}

export interface PostRequest {
    title: string;
    content: string;
}

export interface PostUpdate {
    title?: string;
    content?: string;
}