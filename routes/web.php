<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FacultySectionController;
use App\Http\Controllers\NewsSectionController;
use App\Http\Controllers\ServiceSectionController;
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
});
