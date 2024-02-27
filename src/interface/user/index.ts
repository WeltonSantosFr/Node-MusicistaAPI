export interface IUser {
  username: string;
  email: string;
  password: string;
}

export interface IUserRequest {
  username: string;
  email: string;
  password: string;
}

export interface IUserUpdate {
  username?: string;
  email?: string;
  password?: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}
