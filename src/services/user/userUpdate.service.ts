import { IUserUpdate } from "./../../interface/user/index";
import bcrypt from "bcrypt";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const userUpdateService = async (
  { name, email, password, cpf, lastName, username }: IUserUpdate,
  id: string
) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { id } });

  if (!user) {
    throw new AppError(404, "User not found");
  }

  if (!user.isActive) {
    throw new AppError(404, "User not found");
  }

  if (password) {
    if (bcrypt.compareSync(password!, user.password)) {
      throw new AppError(403, "Inform a different password");
    }
  }

  await userRepository.update(id, {
    name: name ? name : user.name,
    lastName: lastName ? lastName : user.lastName,
    username: username ? username : user.username,
    cpf: cpf ? cpf : user.cpf,
    email: email ? email : user.email,
    password: password ? bcrypt.hashSync(password!, 10) : user.password,
  });
  const updatedUser = await userRepository.find({ where: { id } });
  return updatedUser;
};

export default userUpdateService;
