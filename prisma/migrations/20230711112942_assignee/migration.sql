/*
  Warnings:

  - The `assigneeId` column on the `task` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "task" DROP COLUMN "assigneeId",
ADD COLUMN     "assigneeId" INTEGER[];
