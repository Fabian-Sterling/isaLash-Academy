/*
  Warnings:

  - Added the required column `descripcion` to the `Clase` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Clase" ADD COLUMN     "descripcion" TEXT NOT NULL;
