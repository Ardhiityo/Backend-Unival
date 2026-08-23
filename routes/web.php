<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FacultySectionController;
use App\Http\Controllers\HeroSectionController;
use App\Http\Controllers\NewsSectionController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServiceSectionController;
use App\Http\Controllers\StatisticSectionController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::get('/', [DashboardController::class, 'index']);

    Route::get('/news', [NewsSectionController::class, 'index']);
    Route::get('/news/create', [NewsSectionController::class, 'create']);
    Route::post('/news', [NewsSectionController::class, 'store']);
    Route::get('/news/{newsId}', [NewsSectionController::class, 'edit']);
    Route::put('/news/{newsId}', [NewsSectionController::class, 'update']);
    Route::delete('/news/{newsId}', [NewsSectionController::class, 'destroy']);

    Route::get('/faculties', [FacultySectionController::class, 'index']);
    Route::post('/faculties', [FacultySectionController::class, 'store']);
    Route::patch('/faculties/{facultyId}', [FacultySectionController::class, 'update']);
    Route::delete('/faculties/{facultyId}', [FacultySectionController::class, 'destroy']);

    Route::get('/services', [ServiceSectionController::class, 'index']);
    Route::post('/services', [ServiceSectionController::class, 'store']);
    Route::patch('/services/{serviceId}', [ServiceSectionController::class, 'update']);
    Route::delete('/services/{serviceId}', [ServiceSectionController::class, 'destroy']);

    Route::get('/statistics', [StatisticSectionController::class, 'index']);
    Route::post('/statistics', [StatisticSectionController::class, 'store']);
    Route::patch('/statistics/{serviceId}', [StatisticSectionController::class, 'update']);
    Route::delete('/statistics/{serviceId}', [StatisticSectionController::class, 'destroy']);

    Route::get('/hero-sections', [HeroSectionController::class, 'index']);
    Route::post('/hero-sections', [HeroSectionController::class, 'store']);
    Route::patch('/hero-sections/{serviceId}', [HeroSectionController::class, 'update']);
    Route::delete('/hero-sections/{serviceId}', [HeroSectionController::class, 'destroy']);

    Route::put('/profiles/{userId}', [ProfileController::class, 'update']);
});
