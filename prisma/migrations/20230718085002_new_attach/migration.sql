/*
  Warnings:

  - You are about to drop the `attachment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "attachment" DROP CONSTRAINT "attachment_taskId_fkey";

-- DropTable
DROP TABLE "attachment";
