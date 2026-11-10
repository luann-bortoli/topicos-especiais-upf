<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function index()
    {
        return Inertia::render('welcome', [
            'products' => Product::with('category')
                ->latest()
                ->take(3)
                ->get(),

            'categories' => Category::withCount('products')
                ->latest()
                ->take(3)
                ->get(),
        ]);
    }
}