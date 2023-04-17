import httpStatus from "http-status";
import usersRepository from "../repositories/usersRepositories";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function signUpService(name: string, email: string, password: string) {
    const emailExist = await usersRepository.checkEmail(email);
    if (emailExist) throw httpStatus.CONFLICT;

    const hashedPassword: string = await bcrypt.hash(password, 4);

    await usersRepository.createUser(name, email, hashedPassword);
}

async function signInService(email: string, password: string) {
    const emailExist = await usersRepository.checkEmail(email);
    if (!emailExist) throw httpStatus.NOT_FOUND;

    const checkPassword = bcrypt.compareSync(password, emailExist.password);
    if (!checkPassword) throw httpStatus.UNAUTHORIZED;

    const token = jwt.sign({ id: emailExist.id }, process.env.SECRET_JWT, { expiresIn: 86400 });

    const userData = {
        name: emailExist.name,
        userId: emailExist.id,
        token
    }

    return userData;
}

const usersServices = {
    signUpService,
    signInService
}

export default usersServices;