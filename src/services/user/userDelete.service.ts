import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const userDeleteService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const account = users.find((user) => user.id === id);

  if (!account) {
    throw new AppError(404, "User Not Found");
  }
  if (!account.isActive) {
    throw new AppError(400, "User Already Deleted");
  }

  await userRepository.update(account!.id, { isActive: false });

  return true;
};

export default userDeleteService;
