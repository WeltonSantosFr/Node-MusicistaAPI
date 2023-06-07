import { IUserRequest } from "./../../interface/user/index";
import { AppDataSource } from "../../../data-source";
import { User } from "../../entities/user.entity";
import bcrypt from "bcrypt";
import { AppError } from "../../errors/appError";

const userCreateService = async ({
  name,
  lastName,
  username,
  email,
  password,
  cpf,
}: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ email });

  if (user && user.isActive) {
    throw new AppError(400, "User already exists");
  }

  if (user && !user.isActive) {
    await userRepository.update(user.id, { isActive: false });
    return user;
  }

  const newUser = new User();
  newUser.name = name;
  newUser.lastName = lastName;
  newUser.username = username;
  newUser.email = email;
  newUser.password = password;
  newUser.cpf = cpf;
  userRepository.create(newUser);

  await userRepository.save(newUser);

  return newUser;
};

export default userCreateService;
