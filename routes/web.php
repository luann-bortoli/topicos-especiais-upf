<?php

use App\Http\Controllers\ProductsController;
use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::resource('products', ProductsController::class);

Route::resource('categories', CategoryController::class);

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';