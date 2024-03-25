import {
  Column,
  CreateDateColumn,
  Entity,
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

  @ManyToOne(() => User, {eager:true})
  author: User

  @Column()
  title: string;

  @Column()
  content: string;

  @OneToMany(() => Rating, rating => rating.post, {cascade:true, eager:true})
  ratings: Rating[];
  
  @OneToMany(() => Comment, comment => comment.post, {cascade:true, eager:true})
  comments: Comment[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
