import { postComment, deleteComment, getComments } from "../controllers/commentsControllers";
import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";

const commentsRouter = Router();

commentsRouter
    .post("/comments/:courseId", authMiddleware, postComment)
    .delete("/comments/:commentId", authMiddleware, deleteComment)
    .get("/comments/:courseId", getComments)

export default commentsRouter;