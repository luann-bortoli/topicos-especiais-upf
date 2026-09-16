import { Link, router } from '@inertiajs/react';

interface Category {
    id: number;
    name: string;
    description: string | null;
}

interface Props {
    categories: Category[];
    flash?: {
        success?: string;
    };
}

export default function Index({ categories, flash }: Props) {
    function destroy(id: number) {
        if (confirm('Deseja realmente excluir esta categoria?')) {
            router.delete(`/categories/${id}`);
        }
    }

    return (
        <>
            <h1>Categorias</h1>

            {flash?.success && (
                <p>{flash.success}</p>
            )}

            <Link href="/categories/create">
                Nova categoria
            </Link>

            {categories.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {categories.map(category => (
                            <tr key={category.id}>
                                <td>{category.id}</td>
                                <td>{category.name}</td>
                                <td>
                                    {category.description ?? 'Sem descrição'}
                                </td>
                                <td>
                                    <Link href={`/categories/${category.id}`}>
                                        Ver
                                    </Link>

                                    {' '}

                                    <Link href={`/categories/${category.id}/edit`}>
                                        Editar
                                    </Link>

                                    {' '}

                                    <button
                                        type="button"
                                        onClick={() => destroy(category.id)}
                                    >
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Nenhuma categoria cadastrada.</p>
            )}
        </>
    );
}