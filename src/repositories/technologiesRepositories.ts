import prisma from "../config/database";

async function findCourseByTechnology(technologyId: number) {
    return prisma.techCourses.findMany({
        where: {
            technologyId,
        },
        include: {
            Courses: {
                select: {
                    Names: true,
                    Types: true,
                    Schools: true
                }
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