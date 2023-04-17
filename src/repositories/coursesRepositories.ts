import prisma from "../config/database";

async function findCourses() {
    return prisma.courses.findMany({
        include: {
            Schools: true,
            Types: true,
            Names: true,
            TechCourses: {
                select: {
                    Technologies: true,
                }
            },
            Comments: {
                include: {
                    Users: {
                        select: {
                            name: true
                        }
                    }
                }
            }
        },
    });
};

async function findCourse(courseId: number) {
    return prisma.courses.findUnique({
        where: {
            id: courseId
        },
        include: {
            Schools: true,
            Types: true,
            Names: true,
            TechCourses: {
                where: {
                    courseId: courseId
                },
                select: {
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