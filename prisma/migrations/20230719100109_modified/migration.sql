/*
  Warnings:

  - You are about to drop the column `isCompleted` on the `task` table. All the data in the column will be lost.
  - You are about to drop the column `subtasks` on the `task` table. All the data in the column will be lost.
  - You are about to drop the column `updates` on the `task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "task" DROP COLUMN "isCompleted",
DROP COLUMN "subtasks",
DROP COLUMN "updates",
ADD COLUMN     "assignee" TEXT[];
