/*
  Warnings:

  - You are about to drop the column `isPaid` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "isPaid",
ADD COLUMN     "paidLectures" TEXT;
