import { TechCourses, Technologies } from "@prisma/client";
import technologiesRepository from "../repositories/technologiesRepositories";

async function technologyById(technologyId: number): Promise<TechCourses[]> {
    const technology = await technologiesRepository.findTechnology(technologyId);
   
    if (!technology) {
        console.log('oie courseById')
    };

    return technology;
}

async function technologiesList(): Promise<Technologies[]> {
    const technologies = await technologiesRepository.findTechnologies();
   
    if (!technologies) {
        console.log('oie courseById')
    };

    return technologies;
}

const technologiesServices = {
    technologyById,
    technologiesList
}

export default technologiesServices;