<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\StatisticSectionResource;
use App\Models\StatisticSection;

class StatisticSectionController extends Controller
{
    public function index()
    {
        $statistics = StatisticSection::all();

        return StatisticSectionResource::collection($statistics);
    }
}
