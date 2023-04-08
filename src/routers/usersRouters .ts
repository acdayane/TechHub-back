import { signUp } from "../controllers/usersControllers";
import { Router } from "express";

const usersRouter = Router();

usersRouter
    .post("/sign-up", signUp)
 

export default usersRouter;