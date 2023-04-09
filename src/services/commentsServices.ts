import { Comments } from "@prisma/client";
import httpStatus from "http-status";
import coursesRepository from "../repositories/coursesRepositories";
import commentsRepository from "../repositories/commentsRepositories";

async function newComment(content: string, courseId: number, userId: number) {
    const batata = await commentsRepository.createComment(content, courseId, userId);
    console.log(batata)
}

async function deleteCommentService(userId: number, commentId: number) {
    const checkAuthor = await commentsRepository.checkAuthor(userId, commentId);
    if (!checkAuthor) throw httpStatus.UNAUTHORIZED;

    await commentsRepository.deleteCommentRepository(commentId);
}

async function commentsByCourseId(courseId:number): Promise<Comments[]> {
    const checkCourse = await coursesRepository.findCourse(courseId);
    if (!checkCourse) throw httpStatus.NOT_FOUND;

    const commentsList = await commentsRepository.findComments(courseId);

    return commentsList;
}

const commentsServices = {
    newComment,
    deleteCommentService,
    commentsByCourseId
}

export default commentsServices;