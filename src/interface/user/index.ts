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
  username?: string;
  email?: string;
  password?: string;
}

export interface UserLogin {
  email: string;
  password: string;
}
