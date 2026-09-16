import { Link } from '@inertiajs/react';

interface Category {
    id: number;
    name: string;
    description: string | null;
}

interface Props {
    category: Category;
}

export default function Show({ category }: Props) {
    return (
        <>
            <h1>Detalhes da categoria</h1>

            <p>
                <strong>Código:</strong> {category.id}
            </p>

            <p>
                <strong>Nome:</strong> {category.name}
            </p>

            <p>
                <strong>Descrição:</strong>{' '}
                {category.description ?? 'Sem descrição'}
            </p>

            <Link href={`/categories/${category.id}/edit`}>
                Editar
            </Link>

            {' '}

            <Link href="/categories">
                Voltar
            </Link>
        </>
    );
}