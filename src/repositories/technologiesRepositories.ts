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

const technologiesRepository = {
    findTechnology,
}

export default technologiesRepository;