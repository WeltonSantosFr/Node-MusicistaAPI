import { UserUpdate } from "../../interface/user";
import { Request, Response } from "express";
import userUpdateService from "../../services/user/userUpdate.service";
import { AppError, handleError } from "../../errors/appError";
import { instanceToPlain } from "class-transformer";

const userUpdateController = async (req: Request, res: Response) => {
  try {
    const { email, password, username, profileImagePath }: UserUpdate =
      req.body;
    const { id } = req.user;

    const user = await userUpdateService(
      { email, password, username, profileImagePath },
      id
    );

    return res.status(200).json(instanceToPlain(user));
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
    else {
      res.status(500).json({message: "Internal server error."})
    }
  }
};

export default userUpdateController;
