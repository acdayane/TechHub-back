import { faker } from "@faker-js/faker";
import { Comments } from "@prisma/client";
import prisma from "config/database";

export async function createComment({userId, courseId}): Promise<Comments> {
    return prisma.comments.create({
        data: {
            content: faker.lorem.paragraph(250),
            userId: userId,
            courseId: courseId
        }
    });
}