import prisma from "../config/database";

async function findCourses() {
    return prisma.courses.findMany({})
};

const coursesRepository = {
    findCourses,
}

export default coursesRepository;