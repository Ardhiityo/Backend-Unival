<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreHeroSection;
use App\Http\Requests\UpdateHeroSection;
use App\Models\HeroSection;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class HeroSectionController extends Controller
{
    public function index(Request $request)
    {
        $page = $request->query('page', 1);
        $limit = $request->query('limit', 10);

        $hero_sections = HeroSection::select('id', 'accreditation', 'total_industry_partner', 'total_number_of_graduate')
            ->latest()
            ->paginate($limit, page: $page);

        return inertia('dashboard/hero-sections/page', compact('hero_sections'));
    }

    public function store(StoreHeroSection $request)
    {
        $validated = $request->validated();

        HeroSection::create($validated);

        return back();
    }

    public function update(UpdateHeroSection $request, int $heroSectionId)
    {
        $hero_section = HeroSection::find($heroSectionId);

        if (! $hero_section) {
            throw ValidationException::withMessages(['general' => 'Hero section not found']);
        }

        $validated = $request->validated();

        $hero_section->update($validated);

        return back();
    }

    public function destroy(int $heroSectionId)
    {
        $hero_section = HeroSection::find($heroSectionId);

        if (! $hero_section) {
            throw ValidationException::withMessages(['general' => 'Hero section not found']);
        }

        $hero_section->delete();

        return back();
    }
}
