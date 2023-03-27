import { Schools } from "@prisma/client";
import schoolsRepository from "../repositories/schoolsRepositories";

async function listSchools(): Promise<Schools[]> {
    const schoolsList = await schoolsRepository.findSchools();
   
    if (!schoolsList) {
        console.log('oie listCourses')
    };

    return schoolsList;
}

async function schoolById(schoolId: number): Promise<Schools> {
    const school = await schoolsRepository.findSchool(schoolId);
   
    if (!school) {
        console.log('oie courseById')
    };

    return school;
}

const schoolsServices = {
    listSchools,
    schoolById,
}

export default schoolsServices;