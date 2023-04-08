/*
  Warnings:

  - You are about to drop the column `schoolId` on the `Users` table. All the data in the column will be lost.
  - Added the required column `courseId` to the `Comments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_fk0";

-- AlterTable
ALTER TABLE "Comments" ADD COLUMN     "courseId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "schoolId";

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
