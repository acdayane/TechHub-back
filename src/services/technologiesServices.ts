import { TechCourses, Technologies } from "@prisma/client";
import httpStatus from "http-status";
import technologiesRepository from "../repositories/technologiesRepositories";

async function technologyById(technologyId: number): Promise<TechCourses[]> {
    const technology = await technologiesRepository.findCourseByTechnology(technologyId);
   
    if (!technology) {
        throw httpStatus.NOT_FOUND;
    };

    return technology;
}

async function technologiesList(): Promise<Technologies[]> {
    const technologies = await technologiesRepository.findTechnologies();
   
    if (!technologies) {
        throw httpStatus.NOT_FOUND;
    };

    return technologies;
}

const technologiesServices = {
    technologyById,
    technologiesList
}

export default technologiesServices;