import prisma from "../config/database";

async function createUser(name: string, email: string, password: string) {
    return prisma.users.create({
        data: {
            name,
            email,
            password
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

const usersRepository = {
    createUser,
    checkEmail
}

export default usersRepository;