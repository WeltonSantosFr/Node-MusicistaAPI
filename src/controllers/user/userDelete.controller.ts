import { Request, Response } from "express";
import userDeleteService from "../../services/user/userDelete.service";
import { AppError, handleError } from "../../errors/appError";

const userDeleteController = async (req: Request, res: Response) => {
  try {
    const { id } = req.user;

    const user = await userDeleteService(id);

    return res.status(200).json({ message: "User deleted with success!" });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default userDeleteController;
