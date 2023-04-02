import { Courses } from "@prisma/client";
import coursesRepository from "../repositories/coursesRepositories";

async function listCourses(): Promise<Courses[]> {
    const coursesList = await coursesRepository.findCourses();
   
    if (!coursesList) {
        console.log('oie listCourses')
    };

    return coursesList;
}

async function courseById(courseId: number): Promise<Courses> {
    const course = await coursesRepository.findCourse(courseId);
   
    if (!course) {
        console.log('oie courseById')
    };

    return course;
}

const coursesServices = {
    listCourses,
    courseById,
}

export default coursesServices;