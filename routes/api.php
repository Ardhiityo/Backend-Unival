<?php

use App\Http\Controllers\Api\FacultySectionController;
use App\Http\Controllers\Api\HeroSectionController;
use App\Http\Controllers\Api\NewsSectionController;
use App\Http\Controllers\Api\ServiceSectionControlller;
use App\Http\Controllers\Api\StatisticSectionController;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::get('/news', [NewsSectionController::class, 'index']);
Route::get('/faculties', [FacultySectionController::class, 'index']);
Route::get('/services', [ServiceSectionControlller::class, 'index']);
Route::get('/statistics', [StatisticSectionController::class, 'index']);
Route::get('/hero-sections', [HeroSectionController::class, 'index']);
