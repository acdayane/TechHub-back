import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import jwt from "jsonwebtoken";
import usersRepository from "../repositories/usersRepositories";

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    let userId: number;

    try {
      if (!token) {  
        return res.status(httpStatus.UNAUTHORIZED).send({ message: "Token not found" });
      };
      
      try {
        const result = jwt.verify(token, process.env.SECRET_JWT);
        userId = result.id
      } catch(err) {
        return res.status(httpStatus.UNAUTHORIZED).send({message: "Invalid token"});
      }

      const userExist = await usersRepository.checkUserId(userId);
      if (!userExist) {
          return res.status(httpStatus.UNAUTHORIZED).send({message: "User doesn't exist"});
      };

      res.locals.id = userId;

      next();

    } catch(err) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    }  
}