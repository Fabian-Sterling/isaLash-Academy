import { NextResponse } from 'next/server'
import prisma from '../../../../lib/db' // Asegúrate de que esta ruta es correcta

export async function GET() {
    try {
        const cursos = await prisma.curso.findMany({
            select: {
                id: true,
                nombre: true,
                imageUrl: true, 
                _count: { select: { clases: true } }, // Para obtener el número de clases
            },
        })

        // Mapear el conteo de clases a 'lecciones'
        const cursosConLecciones = cursos.map(curso => ({
            id: curso.id,
            nombre: curso.nombre,
            imageUrl: curso.imageUrl,
            lecciones: curso._count.clases,
        }))

        return NextResponse.json(cursosConLecciones)
    } catch (error) {
        console.error('Error fetching courses:', error)
        return NextResponse.json({ error: 'Error fetching courses' }, { status: 500 })
    }
}


