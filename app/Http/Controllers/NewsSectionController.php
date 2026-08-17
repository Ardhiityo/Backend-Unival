<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreNewsSection;
use App\Models\NewsSection;
use Illuminate\Http\Request;

class NewsSectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('dashboard/news/page');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('dashboard/news/create/page');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreNewsSection $request)
    {
        $validated = $request->validated();

        if ($request->file('image')) {
            $validated['image_url'] = $request->file('image')->store('news', 'public');
        }

        NewsSection::create($validated);

        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(NewsSection $newsSection)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(NewsSection $newsSection)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, NewsSection $newsSection)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(NewsSection $newsSection)
    {
        //
    }
}
