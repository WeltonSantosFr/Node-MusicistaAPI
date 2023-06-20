export interface IUser {
  name: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  cpf: string;
}

export interface IUserRequest {
  name: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  cpf: string;
}

export interface IUserUpdate {
  name?: string;
  lastName?: string;
  username?: string;
  email?: string;
  password?: string;
  cpf?: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}
