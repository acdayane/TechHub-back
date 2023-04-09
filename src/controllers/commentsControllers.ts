import { Request, Response } from "express";
import httpStatus from "http-status";
import { commentSchema } from "../models/commentScheema";
import commentsServices from "../services/commentsServices";

export async function postComment(req: Request, res: Response) {
    const { content } = req.body;
    const { courseId } = req.params;
    const userId = res.locals.id;
    
    const comment = {
        content: content,
        courseId: courseId,
        userId: userId
    }
console.log(comment)
    try {
        const { error } = commentSchema.validate(comment, { abortEarly: false });
        if (error) {
            const err = error.details.map((d) => d.message);
            return res.status(httpStatus.UNPROCESSABLE_ENTITY).send({message: err});
        }

        await commentsServices.newComment(content, Number(courseId), userId);   
   
        return res.sendStatus(httpStatus.CREATED);

    } catch(err) {        
        if (err == httpStatus.CONFLICT) {
            return res.status(httpStatus.CONFLICT).send({message: "E-mail already registred"});
        }

        console.log(err);
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
};

export async function deleteComment(req: Request, res: Response) {
    const userId = res.locals.id;
    const { commentId } = req.params;

    try {
        await commentsServices.deleteCommentService(Number(userId), Number(commentId));   
   
        return res.sendStatus(httpStatus.OK);

    } catch(err) {        
        if (err == httpStatus.UNAUTHORIZED) {
            return res.status(httpStatus.UNAUTHORIZED).send({message: "Unauthorized! You are not the author"});
        }

        console.log(err);
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
};

export async function getComments(req: Request, res: Response) {
    const { courseId } = req.params;

    try {
        const comments = await commentsServices.commentsByCourseId(Number(courseId));   
   
        return res.status(httpStatus.OK).send(comments);

    } catch(err) {        
        if (err == httpStatus.NOT_FOUND) {
            return res.status(httpStatus.NOT_FOUND).send({message: "Course not found"});
        }

        console.log(err);
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
};

