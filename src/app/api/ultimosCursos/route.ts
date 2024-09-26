// app/api/ultimosCursos/route.ts

import { NextResponse } from 'next/server'
import prisma from '../../../../lib/db' // Asegúrate de que esta ruta es correcta

export async function GET(request: Request) {
    const url = new URL(request.url)
    const limitParam = url.searchParams.get('limit')
    const limit = limitParam ? parseInt(limitParam) : 5 // Valor predeterminado: 5 cursos

    try {
        const ultimosCursos = await prisma.curso.findMany({
            orderBy: {
                createdAt: 'desc', // Más recientes primero
            },
            take: limit, // Limita la cantidad de cursos devueltos
            include: {
                clases: true, // Incluye las clases asociadas
                usuario: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    },
                },
            },
        })

        return NextResponse.json(ultimosCursos)
    } catch (error) {
        console.error('Error al obtener los últimos cursos:', error)
        return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 })
    }
}
