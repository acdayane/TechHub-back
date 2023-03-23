-- CreateTable
CREATE TABLE "Comments" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Comments_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Courses" (
    "id" SERIAL NOT NULL,
    "nameId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "durationInMonths" INTEGER NOT NULL,
    "durationInHours" INTEGER NOT NULL,
    "minTuitionFee" INTEGER NOT NULL,
    "maxTuitionFee" INTEGER NOT NULL,
    "msc" BOOLEAN NOT NULL,
    "schoolId" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,

    CONSTRAINT "Courses_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Names" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Names_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schools" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "website" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Schools_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TechCourses" (
    "id" SERIAL NOT NULL,
    "technologyId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "TechCourses_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Technologies" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Technologies_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Types" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Types_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(6) NOT NULL,
    "schoolId" INTEGER NOT NULL,

    CONSTRAINT "Users_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Names_name_key" ON "Names"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Schools_name_key" ON "Schools"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Technologies_name_key" ON "Technologies"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Types_name_key" ON "Types"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_fk0" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_fk0" FOREIGN KEY ("schoolId") REFERENCES "Schools"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_nameId_fkey" FOREIGN KEY ("nameId") REFERENCES "Names"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TechCourses" ADD CONSTRAINT "TechCourses_fk0" FOREIGN KEY ("technologyId") REFERENCES "Technologies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "TechCourses" ADD CONSTRAINT "TechCourses_fk1" FOREIGN KEY ("courseId") REFERENCES "Courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_fk0" FOREIGN KEY ("schoolId") REFERENCES "Schools"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
