<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        Category::insert([
            [
                'name' => 'Eletrônicos',
                'description' => 'Produtos eletrônicos e acessórios.',
            ],
            [
                'name' => 'Alimentos',
                'description' => 'Produtos alimentícios em geral.',
            ],
            [
                'name' => 'Bebidas',
                'description' => 'Bebidas em geral.',
            ],
        ]);
    }
}