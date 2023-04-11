import { cleanDb, generateValidToken } from "tests/helpers";
import commentsServices from "services/commentsServices";
import { beforeEach, describe } from "node:test";
import { createComment } from "tests/factories/commentsFactory";

beforeEach(async() => {
    await cleanDb();
})

describe("GET comments/:courseId", () => {
    it ("should respond with status 200 and comments list", async() => {
        await createComment({userId: 1, courseId: 1});
        await createComment({userId: 2, courseId: 2});
        await createComment({userId: 3, courseId: 1});
        

    });
    it ("should respond with status 200 and comments list", async() => {
        await createComment({userId: 1, courseId: 1});
        await createComment({userId: 2, courseId: 2});
        await createComment({userId: 3, courseId: 1});
        


    });

    it ("should insert a new comment in database", async () => {

    });

    it ("should insert a new user in database", async () => {

    })
})