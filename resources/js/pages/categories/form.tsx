import { Link, useForm } from '@inertiajs/react';

export default function Form() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();

        post('/categories');
    }

    return (
        <form onSubmit={submit}>
            <input type="hidden" name="_token" value="" />

            <div>
                <label htmlFor="name">Nome</label>

                <input
                    id="name"
                    type="text"
                    value={data.name}
                    onChange={e => setData('name', e.target.value)}
                />

                {errors.name && <p>{errors.name}</p>}
            </div>

            <div>
                <label htmlFor="description">
                    Descrição (opcional)
                </label>

                <textarea
                    id="description"
                    value={data.description}
                    onChange={e => setData('description', e.target.value)}
                />

                {errors.description && <p>{errors.description}</p>}
            </div>

            <button type="submit" disabled={processing}>
                Salvar
            </button>

            <Link href="/categories">
                Cancelar
            </Link>
        </form>
    );
}