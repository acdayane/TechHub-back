import { Courses } from "@prisma/client";
import httpStatus from "http-status";
import coursesRepository from "../repositories/coursesRepositories";

async function listCourses(): Promise<Courses[]> {
    const coursesList = await coursesRepository.findCourses();   
    
    if (!coursesList) throw httpStatus.NOT_FOUND;

    return coursesList;
}

async function courseById(courseId: number): Promise<Courses> {
    const course = await coursesRepository.findCourse(courseId);
   
    if (!course) throw httpStatus.NOT_FOUND;

    return course;
}

const coursesServices = {
    listCourses,
    courseById,
}

export default coursesServices;