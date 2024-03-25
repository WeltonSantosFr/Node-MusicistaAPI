import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    Unique,
    UpdateDateColumn,
  } from "typeorm";
  import { User } from "./user.entity";
import { Post } from "./post.entity";
  
  @Entity()
  @Unique(["author", "post"])
  export class Rating {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;
  
    @ManyToOne(() => User, user => user.ratings)
    author: User

    @ManyToOne(() => Post, post => post.ratings)
    post: Post
  
    @Column()
    rating: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }