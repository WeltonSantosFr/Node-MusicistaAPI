import { IUserLogin } from "./../../interface/user/index";
import bcrypt from "bcrypt";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../../errors/appError";

const userLoginService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ email: email });

  if (!user) {
    throw new AppError(403, "Wrong email or password");
  }

  if (!bcrypt.compareSync(password, user.password)) {
    throw new AppError(403, "Wrong email or password");
  }

  const token = jwt.sign({}, process.env.SECRET_KEY as string, {
    expiresIn: "1d",
    subject: user.id,
  });

  return token;
};

export default userLoginService;
