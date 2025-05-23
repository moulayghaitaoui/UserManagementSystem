<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Auth\LoginController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
Route::get('/', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [LoginController::class, 'login']);

Route::post('/logout', [LoginController::class, 'logout'])->name('logout');






Route::middleware(['auth', 'admin'])->group(function () {

    Route::resource('/users', UserController::class)->only([
        'index',
        'create'
    ]);
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::post('/users/store', [UserController::class, 'store'])->name('users.store');
    //users.destroy
    Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('users.destroy'); // ✅ صحيح


    // Route::delete('users/{id}', [UserController::class, 'destroy'])->name('users.destroy');
    // Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');




});


// routes/web.php
