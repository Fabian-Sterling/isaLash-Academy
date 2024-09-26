// prisma/seed.ts

import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt' // Asegúrate de haber instalado bcrypt: npm install bcrypt

const prisma = new PrismaClient()

async function main() {
    // 1. Crear o actualizar un usuario basado en el email único
    const usuario1 = await prisma.user.upsert({
        where: { email: 'instructor@example.com' }, // Campo único
        update: {
            name: 'Nombre del Instructor Actualizado',
            // Opcional: Actualiza la contraseña si es necesario
            // password: await bcrypt.hash('nueva_contraseña_segura', 10),
        },
        create: {
            name: 'Nombre del Instructor',
            email: 'instructor@example.com',
            password: await bcrypt.hash('contraseña_segura', 10), // Hashear la contraseña
        },
    })

    // 2. Crear o actualizar el primer curso basado en el nombre único
    const curso1 = await prisma.curso.upsert({
        where: { nombre: 'Extensiones de Pestañas Pelo a Pelo' }, // Campo único
        update: {
            descripcion: 'Aprende técnicas profesionales de extensiones de pestañas, selección de materiales de alta calidad y protocolos de higiene y seguridad para ofrecer servicios impecables. Al finalizar este curso, podrás crear diseños personalizados que realzarán la belleza de tus clientes y te destacarán como una especialista altamente demandada en el mercado de la estética.',
            videoUrl: '/video/video-para-la-web.mp4', // Asegúrate de que la ruta es correcta
        },
        create: {
            nombre: 'Extensiones de Pestañas Pelo a Pelo',
            descripcion: 'Aprende las técnicas de extensiones de pestañas...',
            videoUrl: '/video/video-para-la-web.mp4',
            usuarioId: usuario1.id, // Asociar el curso con el usuario creado o actualizado
        },
    })

    // 3. Crear las clases para curso1
    await prisma.clase.upsert({
        where: {
            cursoId_nombre: {
                cursoId: curso1.id,
                nombre: 'Introducción al Curso',
            },
        },
        update: {},
        create: {
            nombre: 'Introducción al Curso',
            descripcion: 'Bienvenida y objetivos del curso.',
            contenido: 'Contenido de la clase 1',
            videoUrl: 'https://example.com/videos/curso1/clase1.mp4',
            cursoId: curso1.id,
        },
    })

    await prisma.clase.upsert({
        where: {
            cursoId_nombre: {
                cursoId: curso1.id,
                nombre: 'Materiales Necesarios',
            },
        },
        update: {},
        create: {
            nombre: 'Materiales Necesarios',
            descripcion: 'Lista de materiales y herramientas.',
            contenido: 'Contenido de la clase 2',
            videoUrl: 'https://example.com/videos/curso1/clase2.mp4',
            cursoId: curso1.id,
        },
    })

    await prisma.clase.upsert({
        where: {
            cursoId_nombre: {
                cursoId: curso1.id,
                nombre: 'Caracteristicas de las pestañas pelo a pelo',
            },
        },
        update: {},
        create: {
            nombre: 'Caracteristicas de las pestañas pelo a pelo',
            descripcion: 'Conoce medidas, curvas y tipos',
            contenido: 'Contenido de la clase 2',
            videoUrl: 'https://example.com/videos/curso1/clase2.mp4',
            cursoId: curso1.id,
        },
    })

    // 4. Crear o actualizar el segundo curso basado en el nombre único
    const curso2 = await prisma.curso.upsert({
        where: { nombre: 'Lifting de pestañas' },
        update: {
            descripcion: 'Aprende las técnicas avanzadas de Lifting de Pestañas, domina el uso de productos de alta calidad y aplica estrictos protocolos de higiene y seguridad para ofrecer resultados excepcionales. En este curso, descubrirás cómo realzar la belleza natural de tus clientes con diseños personalizados y duraderos. Al finalizar, podrás realizar lifting de pestañas profesionalmente, garantizando miradas deslumbrantes que mantendrán a tu audiencia enganchada y a tus clientes completamente satisfechos. ¡Inscríbete ahora y convierte tu pasión en una carrera exitosa en el mundo de la estética!',
            videoUrl: '/video/video-para-la-web.mp4', // Asegúrate de que la ruta es correcta
        },
        create: {
            nombre: 'Lifting de pestañas',
            descripcion: 'Aprende las técnicas avanzadas de Lifting de Pestañas, domina el uso de productos de alta calidad y aplica estrictos protocolos de higiene y seguridad para ofrecer resultados excepcionales. En este curso, descubrirás cómo realzar la belleza natural de tus clientes con diseños personalizados y duraderos. Al finalizar, podrás realizar lifting de pestañas profesionalmente, garantizando miradas deslumbrantes que mantendrán a tu audiencia enganchada y a tus clientes completamente satisfechos. ¡Inscríbete ahora y convierte tu pasión en una carrera exitosa en el mundo de la estética!',
            videoUrl: '/video/video-para-la-web.mp4',
            usuarioId: usuario1.id, // Asociar el curso con el usuario creado o actualizado
        },
    })

    // 5. Crear las clases para curso2
    await prisma.clase.upsert({
        where: {
            cursoId_nombre: {
                cursoId: curso2.id,
                nombre: 'Introducción al Curso de lifting de pestañas',
            },
        },
        update: {},
        create: {
            nombre: 'Introducción al Curso de lifting de pestañas',
            descripcion: 'Bienvenida y objetivos del curso.',
            contenido: 'Contenido de la clase 1',
            videoUrl: 'https://example.com/videos/curso2/clase1.mp4',
            cursoId: curso2.id,
        },
    })

    await prisma.clase.upsert({
        where: {
            cursoId_nombre: {
                cursoId: curso2.id,
                nombre: 'Materiales Necesarios',
            },
        },
        update: {},
        create: {
            nombre: 'Materiales Necesarios',
            descripcion: 'Lista de materiales y herramientas.',
            contenido: 'Contenido de la clase 2',
            videoUrl: 'https://example.com/videos/curso2/clase2.mp4',
            cursoId: curso2.id,
        },
    })

    console.log('Cursos y clases creados o actualizados:', { curso1, curso2 })
    // Puedes crear más cursos siguiendo el mismo patrón
}

main()
    .catch((e) => {
        console.error('Error al ejecutar el seed:', e)
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect()
    })



