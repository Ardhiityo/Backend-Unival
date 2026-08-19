<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FacultySectionController;
use App\Http\Controllers\NewsSectionController;
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
    Route::delete('/faculties/{facultyId}', [FacultySectionController::class, 'destroy']);
});
