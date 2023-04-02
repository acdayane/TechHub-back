import prisma from "../config/database";

async function findTechnology(technologyId: number) {
    return prisma.techCourses.findMany({
        where: {
            technologyId,
        },
        include: {
            Technologies: true,
            Courses: true
        }        
    });
};

async function findTechnologies() {
    return prisma.technologies.findMany({});
};

const technologiesRepository = {
    findTechnology,
    findTechnologies
}

export default technologiesRepository;