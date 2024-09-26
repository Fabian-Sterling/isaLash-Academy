import { NextResponse } from 'next/server'
import prisma from '../../../../../../lib/db'

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    // Obtener el curso por ID
    const curso = await prisma.curso.findUnique({
      where: { id: id },
      include: {
        clases: true, // Incluir las clases asociadas si es necesario
      },
    });

    if (!curso) {
      return NextResponse.json({ message: 'Curso no encontrado' }, { status: 404 });
    }

    return NextResponse.json(curso);
  } catch (error) {
    console.error('Error al obtener el curso:', error);
    return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 });
  }
}





