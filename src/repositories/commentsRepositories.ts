import prisma from "../config/database";

async function createComment(content: string, courseId: number, userId: number) {
    return prisma.comments.create({
        data: {
            content: content,
            userId: userId,
            courseId: courseId            
        }
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
        },
        include: {
            Users: {
                select: {
                    name: true
                }
            }
        }
    });
};

const commentsRepository = {
    createComment,
    deleteCommentRepository,
    findComments,
    checkAuthor
};

export default commentsRepository;