<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFacultySection;
use App\Http\Requests\UpdateFacultySection;
use App\Models\FacultySection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;

class FacultySectionController extends Controller
{
    public function index(Request $request)
    {
        $page = $request->query('page', 1);
        $limit = $request->query('limit', 10);

        $faculties = FacultySection::select('id', 'title', 'description', 'image_url', 'detail_url')
            ->latest()
            ->paginate($limit, page: $page);

        return inertia('dashboard/faculties/page', compact('faculties'));
    }

    public function store(StoreFacultySection $request)
    {
        $validated = $request->validated();

        if ($request->hasFile('image')) {
            $validated['image_url'] = $validated['image']->store('faculties', 'public');
        }

        FacultySection::create($validated);

        return back();
    }

    public function update(UpdateFacultySection $request, int $facultyId)
    {
        $faculty = FacultySection::find($facultyId);

        if (! $faculty) {
            throw ValidationException::withMessages(['general' => 'Faculty not found']);
        }

        $validated = $request->validated();

        if ($request->hasFile('image')) {
            if (Storage::disk('public')->exists($faculty->image_url)) {
                Storage::disk('public')->delete($faculty->image_url);
            }
            $validated['image_url'] = $validated['image']->store('faculties', 'public');
        } else {
            $validated['image_url'] = $faculty->image_url;
        }

        $faculty->update($validated);

        return back();
    }

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
