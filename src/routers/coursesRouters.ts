import { Router } from "express";
import { getCourses } from "../controllers/coursesControllers";

const coursesRouter = Router();

coursesRouter
    .get("/courses", getCourses);

export default coursesRouter;