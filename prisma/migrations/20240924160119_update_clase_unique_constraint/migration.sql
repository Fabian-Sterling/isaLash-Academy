/*
  Warnings:

  - A unique constraint covering the columns `[cursoId,nombre]` on the table `Clase` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Clase_nombre_key";

-- CreateIndex
CREATE UNIQUE INDEX "Clase_cursoId_nombre_key" ON "Clase"("cursoId", "nombre");
