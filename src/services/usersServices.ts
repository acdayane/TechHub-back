import httpStatus from "http-status";
import usersRepository from "../repositories/usersRepositories";

async function signUpService(name: string, email: string, password: string) {
    const emailExist = await usersRepository.checkEmail(email);
    if (emailExist) throw httpStatus.CONFLICT;

    await usersRepository.createUser(name, email, password);
}

const usersServices = {
    signUpService,
}

export default usersServices;