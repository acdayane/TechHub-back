import { Schools, TechCourses } from "@prisma/client";
import technologiesRepository from "../repositories/technologiesRepositories";

async function technologyById(technologyId: number): Promise<TechCourses[]> {
    const technology = await technologiesRepository.findTechnology(technologyId);
   
    if (!technology) {
        console.log('oie courseById')
    };

    return technology;
}

const technologiesServices = {
    technologyById,
}

export default technologiesServices;