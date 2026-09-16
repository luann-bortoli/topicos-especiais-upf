<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController
{
    public function index()
    {
        $categories = Category::latest()->get();

        return Inertia::render('categories/index', ['categories' => $categories]);
    }

    public function create()
    {
        return Inertia::render('categories/create');
    }

    public function store(Request $request)
    {
        Category::create($this->validar($request));

        return redirect()->route('categories.index')
            ->with('success', 'Categoria cadastrada com sucesso!');
    }

    public function show(string $id)
    {
        $category = Category::findOrFail($id);

        return Inertia::render('categories/show', ['category' => $category]);
    }

    public function edit(string $id)
    {
        $category = Category::findOrFail($id);

        return Inertia::render('categories/edit', [
            'category' => $category
        ]);
    }

    public function update(Request $request, Category $category)
    {
        $category->update($this->validar($request));

        return redirect()->route('categories.index')
            ->with('success', 'Categoria atualizada com sucesso!');
    }

    public function destroy(Category $category)
    {
        $category->delete();

        return redirect()->route('categories.index')
            ->with('success', 'Categoria excluída com sucesso!');
    }

    private function validar(Request $request)
    {
        return $request->validate([
            'name' => ['required', 'string', 'max:100'],
            'description' => ['nullable', 'string', 'max:1000'],
        ], [
            'name.required' => 'Informe o nome da categoria.',
            'name.string' => 'O nome deve ser um texto.',
            'name.max' => 'O nome deve ter no máximo 100 caracteres.',
            'description.string' => 'A descrição deve ser um texto.',
            'description.max' => 'A descrição deve ter no máximo 1000 caracteres.',
        ]);
    }
}