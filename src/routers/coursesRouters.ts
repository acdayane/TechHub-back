import { Router } from "express";
import { getCourses, getCourseById } from "../controllers/coursesControllers";

const coursesRouter = Router();

coursesRouter
    .get("/courses", getCourses)
    .get("/courses/:courseId", getCourseById)

export default coursesRouter;