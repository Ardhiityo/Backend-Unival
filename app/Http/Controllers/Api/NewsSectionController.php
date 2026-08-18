<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\NewsSectionResource;
use App\Models\NewsSection;

class NewsSectionController extends Controller
{
    public function index()
    {
        $news = NewsSection::latest()->cursorPaginate(6);

        return NewsSectionResource::collection($news);
    }
}
