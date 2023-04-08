import prisma from "../config/database";

async function createComment({content: string, userId: number, courseId: number }) {
    return prisma.users.update({
        data: {
            content,
            userId,
            courseId,
        }
    });
};

async function updateComment({id: number, content: string, userId: number, courseId: number }) {
    return prisma.users.update({
        where: {
            id,
        }
        data: {
            content,
            userId,
            courseId,
        }
    });
};

const commentsRepository = {
    createComment,
    updateComment
}

export default commentsRepository;