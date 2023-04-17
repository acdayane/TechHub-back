import prisma from "../config/database";

async function findCourseByTechnology(technologyId: number) {
    return prisma.techCourses.findMany({
        where: {
            technologyId,
        },
        include: {
            Courses: {
                include: {
                    Names: true,
                    Types: true,
                    Schools: true,
                    TechCourses: {
                        select: {
                            Technologies: {
                                select: {
                                    name: true,
                                }
                            }
                        }
                    }
                },
            },
            Technologies: {
                select: {
                    name: true
                }
            },
        },    
    });
};

async function findTechnologies() {
    return prisma.technologies.findMany({
        orderBy: [
            {
              name: 'asc',
            },
        ]
    });
};

const technologiesRepository = {
    findCourseByTechnology,
    findTechnologies
}

export default technologiesRepository;