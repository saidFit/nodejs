import { Request, Response, NextFunction } from "express";
import CreateError from "../utils/CreateError";

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
   
    next(CreateError(201,{message:'user add successfully'})) // Like res.status(201).send("add user ts");
  } catch (error) {
    // Handle any errors that occur during the asynchronous operation
    next(error);
  }
};
