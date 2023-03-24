import coursesRepository from "../repositories/coursesRepositories";

async function listCourses() {
    const coursesList = await coursesRepository.findCourses;

    return coursesList
}

const coursesServices = {
    listCourses,
}

export default coursesServices;