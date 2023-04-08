import { Router } from "express";
import { getCourses, getCourseById } from "../controllers/coursesControllers";

const commentsRouter = Router();

commentsRouter
    .post("/comment", newComment)
    .delete("/comment/:id", deleteComment)
    .get("/comment/:courseId", getComments)

export default commentsRouter;