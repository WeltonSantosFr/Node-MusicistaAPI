import * as express from "express";
import 'express-fileupload'

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
      };
    }
  }
}