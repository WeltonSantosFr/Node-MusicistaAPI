import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./user.entity";
import { Comment } from "./comment.entity";
import { Rating } from "./rating.entity";

@Entity()
export class Post {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @ManyToOne(() => User)
  @JoinColumn({name: 'authorId'})
  author: User

  @Column()
  title: string;

  @Column()
  content: string;

  @OneToMany(() => Rating, rating => rating.post)
  @JoinColumn({name: 'ratingId'})
  rating: Rating;
  
  @OneToMany(() => Comment, comment => comment.post)
  comments: Comment[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
