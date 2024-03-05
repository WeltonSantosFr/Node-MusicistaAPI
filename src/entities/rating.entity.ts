import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from "typeorm";
  import { User } from "./user.entity";
import { Post } from "./post.entity";
  
  @Entity()
  export class Rating {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;
  
    @OneToOne(() => User)
    @JoinColumn({name: 'authorId'})
    author: User

    @ManyToOne(() => Post, post => post.rating)
    @JoinColumn({name: 'postId'})
    post: Post
  
    @Column()
    rating: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }