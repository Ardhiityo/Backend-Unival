<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\HeroSectionResource;
use App\Models\HeroSection;

class HeroSectionController extends Controller
{
    public function index()
    {
        $hero_sections = HeroSection::all();

        return HeroSectionResource::collection($hero_sections);
    }
}
