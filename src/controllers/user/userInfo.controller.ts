import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userInfoService from "../../services/user/userInfo.service";

const userInfoController = async (req:Request, res:Response) => {
    try {
        const {id} = req.user

        const user = await userInfoService(id)

        return res.status(200).json(user)

    } catch (err) {
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}

export default userInfoController