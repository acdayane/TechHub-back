import { postComment, deleteComment, getComments } from "../controllers/commentsControllers";
import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";

const commentsRouter = Router();

commentsRouter
    .post("/comment/:courseId", authMiddleware, postComment)
    .delete("/comment/:commentId", authMiddleware, deleteComment)
    .get("/comments/:courseId", getComments)

export default commentsRouter;