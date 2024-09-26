import { PanelClases } from 'app/components/curso/PanelClases/PanelClases'

export default async function PanelClasesPage({ params }: { params: { id: string } }) {
    const { id } = params

    // Obtener las clases del curso desde la API interna
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/cursos/${id}/PanelClases`, {
        cache: 'no-store',
    })

    if (!res.ok) {
       // Manejar errores
        return <p>Error al cargar las clases del curso.</p>;
    }

    const clases = await res.json();

    return (
        <main>
            <PanelClases />
        </main>
    )
}
