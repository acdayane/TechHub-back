import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { userSchema } from "../models/userScheema";

export function userMiddleware(req: Request, res: Response, next: NextFunction) {
  const { error } = userSchema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error.details.map((d) => d.message));
  };

  next();
};