<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\NewsSectionController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::get('/', [DashboardController::class, 'index']);
    Route::get('/news', [NewsSectionController::class, 'index']);
    Route::get('/news/create', [NewsSectionController::class, 'create']);
    Route::post('/news/create', [NewsSectionController::class, 'store']);
    Route::get('/news/{newsId}', [NewsSectionController::class, 'edit']);
    Route::put('/news/{newsId}', [NewsSectionController::class, 'update']);
    Route::delete('/news/{newsId}', [NewsSectionController::class, 'destroy']);
});
