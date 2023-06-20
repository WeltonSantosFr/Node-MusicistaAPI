import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const tokenAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Invalid token" });
  }

  jwt.verify(token, process.env.SECRET_KEY as string, (err, decoded: any) => {
    if (err) {
      return res.status(401).json({
        message: "Invalid token",
      });
    }

    req.user = { id: decoded.sub };
    return next();
  });
};

export default tokenAuthMiddleware;
