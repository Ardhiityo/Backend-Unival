<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\FacultySectionResource;
use App\Models\FacultySection;

class FacultySectionController extends Controller
{
    public function index()
    {
        $faculties = FacultySection::latest()->cursorPaginate(3);

        return FacultySectionResource::collection($faculties);
    }
}
