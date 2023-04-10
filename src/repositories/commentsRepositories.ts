import prisma from "../config/database";

async function createComment(content: string, courseId: number, userId: number) {
    const data = {
        content,
        userId,
        courseId
    }

    return prisma.comments.create({
        data
    });
};

async function deleteCommentRepository(commentId: number) {
    return prisma.comments.delete({
        where: {
            id: commentId
        }
    });
};

async function checkAuthor(userId: number, commentId: number) {
    return prisma.comments.findFirst({
        where: {
            id: commentId,
            userId
        }
    });
};

async function findComments(courseId: number) {
    return prisma.comments.findMany({
        where: {
            courseId
        }
    })
};

const commentsRepository = {
    createComment,
    deleteCommentRepository,
    findComments,
    checkAuthor
};

export default commentsRepository;