import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from "typeorm";
  import { User } from "./user.entity";
import { Post } from "./post.entity";
  
  @Entity()
  export class Comment {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;
  
    @ManyToOne(() => User)
    @JoinColumn({name: 'authorId'})
    author: User

    @ManyToOne(() => Post, post => post.comments)
    @JoinColumn({name: 'postId'})
    post: Post
  
    @Column()
    comment: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }