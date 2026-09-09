<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductsController
{
    public function index()
    {
        $products = Product::latest()->get();

        return Inertia::render('products/index', ['products' => $products]);
    }

    public function create()
    {
        return Inertia::render('products/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
        ]);

        Product::create($validated);

        return redirect()->route('products.index');
    }

    public function show(string $id)
    {
        $product = Product::findOrFail($id);

        return Inertia::render('products/show', ['product' => $product]);
    }

    public function edit(string $id)
    {
        $product = Product::findOrFail($id);

        return Inertia::render('products/edit', [
            'product' => $product
        ]); 
    }

    public function update(Request $request, string $id)
    {
        $product = Product::findOrFail($id);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
        ]);

        $product->update($validated);

        return redirect()->route('products.index');
    }

    public function destroy(string $id)
    {
        $product = Product::findOrFail($id);
        $product->delete();

        return redirect()->route('products.index');
    }
}
