import prisma from "../config/database";

async function createUser(name: string, email: string, hashedPassword: string) {
    return prisma.users.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    });
};

async function checkEmail(email: string) {
    return prisma.users.findFirst({
        where: {
            email
        }
    });
};

async function checkUserId(userId: number) {
    return prisma.users.findFirst({
        where: {
            id: userId
        }
    });
};

const usersRepository = {
    createUser,
    checkEmail,
    checkUserId
}

export default usersRepository;