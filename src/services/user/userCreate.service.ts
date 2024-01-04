import { UserRequest } from "./../../interface/user/index";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import bcrypt from "bcrypt";
import { AppError } from "../../errors/appError";

const userCreateService = async ({
  username,
  email,
  password,
}: UserRequest) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ email });

  if (user && user.isActive) {
    throw new AppError(400, "User already exists");
  }

  if (user && !user.isActive) {
    await userRepository.update(user.id, { isActive: true, password: bcrypt.hashSync(password, 10) });
    return user;
  }

  const newUser = new User();
  newUser.username = username;
  newUser.email = email;
  newUser.password = bcrypt.hashSync(password, 10);
  userRepository.create(newUser);

  await userRepository.save(newUser);

  return newUser;
};

export default userCreateService;
