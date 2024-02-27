import { UploadedFile } from "express-fileupload"
import { User } from "../user"

export interface MusicRequest {
    songName: string
    artist: string
    difficulty: number
    data: Buffer
    userId: string
}

export interface MusicUpdate {
    id: string
    songName?: string
    artist?: string
    difficulty?: number
    data?: {
        type: string
        data: Buffer
    }
  }