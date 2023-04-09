import { Schools } from "@prisma/client";
import httpStatus from "http-status";
import schoolsRepository from "../repositories/schoolsRepositories";

async function listSchools(): Promise<Schools[]> {
    const schoolsList = await schoolsRepository.findSchools();
   
    if (!schoolsList) {
        throw httpStatus.NOT_FOUND;
    };

    return schoolsList;
}

async function schoolById(schoolId: number): Promise<Schools> {
    const school = await schoolsRepository.findSchool(schoolId);
   
    if (!school) {
        throw httpStatus.NOT_FOUND;
    };

    return school;
}

const schoolsServices = {
    listSchools,
    schoolById,
}

export default schoolsServices;