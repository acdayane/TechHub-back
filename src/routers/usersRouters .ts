import { signUp, signIn } from "../controllers/usersControllers";
import { Router } from "express";

const usersRouter = Router();

usersRouter
    .post("/sign-up", signUp)
    .post("/sign-in", signIn);

export default usersRouter;