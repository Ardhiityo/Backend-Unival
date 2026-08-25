<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\NewsSectionResource;
use App\Models\NewsSection;

class NewsSectionController extends Controller
{
    public function index()
    {
        $news = NewsSection::latest()->cursorPaginate(3);

        return NewsSectionResource::collection($news);
    }

    public function show(string $slug)
    {
        $news = NewsSection::where('slug', $slug)->first();

        if (! $news) {
            return response()->json([
                'error' => [
                    'message' => 'News not found',
                ],
            ], status: 404);
        }

        return new NewsSectionResource($news);
    }
}
