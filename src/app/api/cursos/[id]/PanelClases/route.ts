import { NextResponse } from 'next/server'
import prisma from '../../../../../../lib/db'

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
      // Obtener las clases del curso por ID
        const clases = await prisma.clase.findMany({
            where: { cursoId: id },
            orderBy: { createdAt: 'asc' }, // Ordenar las clases por fecha de creacion ascendente
        })

        if (!clases || clases.length === 0) {
            return NextResponse.json({ message: 'Clases no encontradas' }, { status: 404 });
        }

        return NextResponse.json(clases);
    } catch (error) {
        console.error('Error al obtener las clases:', error);
        return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 });
    }
}
