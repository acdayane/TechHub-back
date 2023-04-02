import prisma from "../config/database";

async function findSchools() {
    return prisma.schools.findMany({
        include: {
            Courses: {
                select: {
                    Types: {
                        select: {
                            name: true
                        }
                    },
                    Names: {
                        select: {
                            name: true
                        }
                    }
                }
            }
        }
    });
};

async function findSchool(courseId: number) {
    return prisma.schools.findUnique({
        where: {
            id: courseId
        },
        include: {
            Courses: {
                select: {
                    Names: {
                        select: {
                            name: true
                        }
                    },
                    durationInHours: true,
                    durationInMonths: true,
                    minTuitionFee: true,
                    maxTuitionFee: true,                    
                }
            }
        },
    });
};

const schoolsRepository = {
    findSchools,
    findSchool
}

export default schoolsRepository;