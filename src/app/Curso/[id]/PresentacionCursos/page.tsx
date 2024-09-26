import { PresentacionCursos } from 'app/components/curso/PresentacionCursos/PresentacionCurso'

export default async function PresentacionCursoPage({ params }: { params: { id: string } }) {
    const { id } = params

  // Obtener los datos del curso desde la API interna
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/cursos/${id}/PresentacionCursos`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        // Manejar errores
        return <p>Error al cargar la información del curso.</p>
    }

    const curso = await res.json()

    return (
        <main>
            <PresentacionCursos />
        </main>
    )
}
