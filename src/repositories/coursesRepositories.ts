import prisma from "../config/database";

async function findCourses() {
    return prisma.courses.findMany({
        include: {
            Schools: true
        }
    });
};

async function findCourse(courseId: number) {
    return prisma.courses.findUnique({
        where: {
            id: courseId
        },
        include: {
            Schools: true,
            TechCourses: {
                where: {
                    courseId: courseId
                },
                select: {
                    technologyId: true,
                    Technologies: true,
                }
            }
        }
    });
};

const coursesRepository = {
    findCourses,
    findCourse
}

export default coursesRepository;