import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userCreateService from "../../services/user/userCreate.service";

const userCreateController = async (req: Request, res: Response) => {
  try {
    const { name, lastName, username, email, cpf, password } = req.body;

    const newUser = await userCreateService({
      name,
      lastName,
      username,
      email,
      password,
      cpf,
    });

    return res.status(201).json(instanceToPlain(newUser));
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default userCreateController;
