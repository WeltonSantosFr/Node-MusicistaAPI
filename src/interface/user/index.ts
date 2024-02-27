import { Multer } from "multer";

export interface User {
  username: string;
  email: string;
  password: string;
}

export interface UserRequest {
  username: string;
  email: string;
  password: string;
}

export interface UserUpdate {
  profileImagePath?: string
  username?: string;
  email?: string;
  password?: string;
}

export interface UserLogin {
  email: string;
  password: string;
}
