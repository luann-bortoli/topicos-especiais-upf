<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        Product::insert([
            [
                'category_id' => 1,
                'name' => 'Fone Bluetooth',
                'description' => 'Fone de ouvido sem fio.',
                'price' => 89.90,
                'stock' => 20,
            ],
            [
                'category_id' => 2,
                'name' => 'Chocolate',
                'description' => 'Barra de chocolate ao leite.',
                'price' => 8.50,
                'stock' => 50,
            ],
            [
                'category_id' => 3,
                'name' => 'Refrigerante',
                'description' => 'Refrigerante de 2 litros.',
                'price' => 9.90,
                'stock' => 30,
            ],
        ]);
    }
}