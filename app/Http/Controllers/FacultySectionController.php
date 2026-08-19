<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFacultySection;
use App\Models\FacultySection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;

class FacultySectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $page = $request->query('page', 1);
        $limit = $request->query('limit', 10);

        $faculties = FacultySection::select('id', 'title', 'description')
            ->latest()
            ->paginate($limit, page: $page);

        return inertia('dashboard/faculties/page', compact('faculties'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFacultySection $request)
    {
        $validated = $request->validated();

        if ($request->hasFile('image')) {
            $validated['image_url'] = $validated['image']->store('faculties', 'public');
        }

        FacultySection::create($validated);

        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(FacultySection $facultySection)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(FacultySection $facultySection)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, FacultySection $facultySection)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $facultyId)
    {
        $faculty = FacultySection::find($facultyId);

        if (! $faculty) {
            throw ValidationException::withMessages(['general' => 'Faculty not found']);
        }

        if (Storage::disk('public')->exists($faculty->image_url)) {
            Storage::disk('public')->delete($faculty->image_url);
        }

        $faculty->delete();

        return back();
    }
}
