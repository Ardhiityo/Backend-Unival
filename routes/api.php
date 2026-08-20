<?php

use App\Http\Controllers\Api\FacultySectionController;
use App\Http\Controllers\Api\NewsSectionController;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::get('/news', [NewsSectionController::class, 'index']);
Route::get('/faculties', [FacultySectionController::class, 'index']);
