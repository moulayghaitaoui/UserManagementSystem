<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::get('/users', [UserController::class, 'indexJSON']);
Route::get('/users/pairs/{sum}', [UserController::class, 'getUserPairs']);
// routes/api.php
Route::get('/users/age-distribution', [UserController::class, 'ageDistribution']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
