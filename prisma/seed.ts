import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.schools.createMany({
    skipDuplicates: true,
    data: [
      { name: 'Driven Education', website: 'https://www.driven.com.br/', image: 'https://s3.amazonaws.com/gupy5/production/companies/2355/career/19612/images/2021-07-28_17-25_logo.png' },
      { name: 'Kenzie', website: 'https://kenzie.com.br/', image: 'https://prnewswire.com.br/wp-content/uploads/2019/12/Kenzie_Academy_Logo.jpg' },
      { name: 'Labenu', website: 'https://www.labenu.com.br/', image: 'https://avatars.githubusercontent.com/u/53058090?s=280&v=4' },
      { name: 'Tera', website: 'https://somostera.com/', image: 'https://somostera.com/_nuxt/img/9ab3488.jpg' },
      { name: 'Trybe', website: 'https://www.betrybe.com/', image: 'https://avatars.githubusercontent.com/u/51808343?s=280&v=4' },   
    ]
  });

  await prisma.types.createMany({
    skipDuplicates: true,
    data: [
      { name: 'Curso livre (aulas ao vivo)' },
      { name: 'Curso por Assinatura' },
      { name: 'Curso de Pós-Graduação' },
    ]
  });

  await prisma.names.createMany({
    skipDuplicates: true,
    data: [
      { name: 'Desenvolvimento Web Full Stack' },
    ]
  });

  await prisma.courses.createMany({
    skipDuplicates: true,
    data: [
      {
        nameId: 1,
        description: 'Torne-se um Software Engineer em 9 meses sem pagar nada enquanto estuda. Nossa Formação é focada em empregabilidade de alto nível. Ou seja, montamos o nosso programa de mãos dadas com as nossas empresas parceiras para ensinar tudo o que você precisa para começar uma carreira de sucesso.',
        durationInMonths: 9,
        durationInHours: 1450,
        minTuitionFee: 1990000,
        maxTuitionFee: 4000000,
        msc: true,
        schoolId: 1,
        typeId: 1,         
      },
      {
        nameId: 1,
        description: 'Temos o objetivo de ofertar ensino de qualidade para quem deseja trabalhar na área da tecnologia. Com o foco no aprendizado prático, ensina as principais linguagens de programação do mercado para o desenvolvimento de um programador full stack, inclusive soft skills. As aulas são online e ao vivo e contamos com suporte em tempo real.',
        durationInMonths: 12,
        durationInHours: 2000,
        minTuitionFee: 1920000,
        maxTuitionFee: 2400000,
        msc: true,
        schoolId: 2,
        typeId: 1,         
      },
      {
        nameId: 1,
        description: 'Na Labenu você aprende a programar, mas também aprende a como entrar, se manter e alcançar sucesso no mercado de trabalho de tecnologia. Para isso, concentramos o nosso ensino em 4 pilares: conhecimento técnico, soft skills, empregabilidade e network.',
        durationInMonths: 6,
        durationInHours: 1000,
        minTuitionFee: 1260000,
        maxTuitionFee: 2400000,
        msc: true,
        schoolId: 3,
        typeId: 1,         
      },
      {
        nameId: 1,
        description: 'Desenvolva sua carreira em uma das áreas mais requisitadas do momento e atue tanto como Front-End e Back-End dominando as principais habilidades do mercado.',
        durationInMonths: 8,
        durationInHours: 500,
        minTuitionFee: 531050,
        maxTuitionFee: 990000,
        msc: false,
        schoolId: 4,
        typeId: 1,         
      },
      {
        nameId: 1,
        description: 'O curso da Trybe é para você que não tem conhecimento na área de programação ou possui conhecimentos básicos e deseja aprofundar.',
        durationInMonths: 12,
        durationInHours: 1500,
        minTuitionFee: 2000000,
        maxTuitionFee: 4600000,
        msc: true,
        schoolId: 5,
        typeId: 1,         
      },
    ]
  });

  await prisma.technologies.createMany({
    skipDuplicates: true,
    data: [
      { name: 'HTML e CSS', image: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" }, //1
      { name: 'JavaScript', image: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" }, //2
      { name: 'Phyton', image: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" }, //3
      { name: 'PHP', image: "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white"}, //4
      { name: 'React', image: "https://img.shields.io/badge/React-gray?style=for-the-badge&logo=react&logoColor=61DAFB"}, //5
      { name: 'Jest', image: "https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"}, //6
      { name: 'SQL', image: "https://img.shields.io/badge/SQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"}, //7
      { name: 'NoSQL', image: "https://img.shields.io/badge/NoSQL-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"}, //8
      { name: 'TypeScript', image: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"}, //9
      { name: 'Node', image: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"}, //10
      { name: 'AWS', image: "https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white"}, //11
      { name: 'CSS', image: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"} //12
    ]
  });

  await prisma.techCourses.createMany({
    skipDuplicates: true,
    data: [
      { technologyId: 1, courseId: 1},
      { technologyId: 2, courseId: 1},
      { technologyId: 5, courseId: 1},
      { technologyId: 6, courseId: 1},
      { technologyId: 7, courseId: 1},
      { technologyId: 8, courseId: 1},
      { technologyId: 9, courseId: 1},
      { technologyId: 10, courseId: 1},
      { technologyId: 11, courseId: 1},
      { technologyId: 12, courseId: 1},
      { technologyId: 1, courseId: 2},
      { technologyId: 2, courseId: 2},
      { technologyId: 3, courseId: 2},
      { technologyId: 5, courseId: 2},
      { technologyId: 6, courseId: 2},
      { technologyId: 7, courseId: 2},
      { technologyId: 8, courseId: 2},
      { technologyId: 9, courseId: 2},
      { technologyId: 10, courseId: 2},
      { technologyId: 11, courseId: 2},
      { technologyId: 12, courseId: 2},
      { technologyId: 1, courseId: 3},
      { technologyId: 2, courseId: 3},
      { technologyId: 5, courseId: 3},
      { technologyId: 6, courseId: 3},
      { technologyId: 7, courseId: 3},
      { technologyId: 9, courseId: 3},
      { technologyId: 10, courseId: 3},
      { technologyId: 11, courseId: 3},
      { technologyId: 12, courseId: 3},
      { technologyId: 1, courseId: 4},
      { technologyId: 2, courseId: 4},
      { technologyId: 5, courseId: 4},
      { technologyId: 7, courseId: 4},
      { technologyId: 10, courseId: 4},
      { technologyId: 12, courseId: 4},
      { technologyId: 1, courseId: 5},
      { technologyId: 2, courseId: 5},
      { technologyId: 3, courseId: 5},
      { technologyId: 5, courseId: 5},
      { technologyId: 6, courseId: 5},
      { technologyId: 7, courseId: 5},
      { technologyId: 8, courseId: 5},
      { technologyId: 9, courseId: 5},
      { technologyId: 10, courseId: 5},
      { technologyId: 12, courseId: 5},
    ]
  });
}

main()
  .then(() => console.log('Seed ok'))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });