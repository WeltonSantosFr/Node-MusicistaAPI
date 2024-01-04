import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { User } from "./user.entity";
import { UploadedFile } from "express-fileupload";


@Entity()
export class Music {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column()
    songName: string;

    @Column()
    artist: string

    @Column()
    difficulty: number

    @Column({ type: 'bytea' })
    data: UploadedFile | UploadedFile[]

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => User)
    user: User
}
