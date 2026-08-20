<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\ServiceSectionResource;
use App\Models\ServiceSection;

class ServiceSectionControlller extends Controller
{
    public function index()
    {
        $services = ServiceSection::latest()->cursorPaginate(3);

        return ServiceSectionResource::collection($services);
    }
}
