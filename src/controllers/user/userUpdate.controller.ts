import { UserUpdate } from "../../interface/user";
import { Request, Response } from "express";
import userUpdateService from "../../services/user/userUpdate.service";
import { AppError, handleError } from "../../errors/appError";
import { instanceToPlain } from "class-transformer";

const userUpdateController = async (req: Request, res: Response) => {
  try {
    const { email, password, username }: UserUpdate =
      req.body;
    const { id } = req.user;

    const user = await userUpdateService(
      { email, password, username },
      id
    );

    return res.status(200).json(instanceToPlain(user));
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default userUpdateController;
