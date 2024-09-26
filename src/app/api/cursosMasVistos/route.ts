// app/api/cursosMasVistos/route.ts

import { NextResponse } from 'next/server'
import prisma from '../../../../lib/db' // Asegúrate de que esta ruta es correcta

interface Curso {
    id: string
    nombre: string
    descripcion: string
    videoUrl?: string
    imageUrl?: string
    views: number
    createdAt: string
    updatedAt: string
    usuarioId: string
    clases: Clase[]
    usuario?: {
        id: string
        name: string
        email: string
    }
}

interface Clase {
    id: string
    nombre: string
    descripcion: string
    contenido: string
    videoUrl?: string
    cursoId: string
}

interface CursosMasVistosResponse {
    data: Curso[]
    total: number
    page: number
    lastPage: number
}

export async function GET(request: Request) {
    const url = new URL(request.url)
    const limitParam = url.searchParams.get('limit')
    const pageParam = url.searchParams.get('page')

    const limit = limitParam ? parseInt(limitParam) : 5
    const page = pageParam ? parseInt(pageParam) : 1
    const skip = (page - 1) * limit

    try {
        const cursosMasVistos = await prisma.curso.findMany({
            orderBy: {
                views: 'desc', // Ordena por vistas descendente
            },
            take: limit,
            skip: skip,
            include: {
                clases: true,
                usuario: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    },
                },
            },
        })

        const totalCursos = await prisma.curso.count()

        return NextResponse.json({
            data: cursosMasVistos,
            total: totalCursos,
            page: page,
            lastPage: Math.ceil(totalCursos / limit),
        })
    } catch (error) {
        console.error('Error al obtener los cursos más vistos:', error)
        return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 })
    }
}
