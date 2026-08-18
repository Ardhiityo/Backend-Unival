<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreNewsSection;
use App\Http\Requests\UpdateNewsSection;
use App\Models\NewsSection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;

class NewsSectionController extends Controller
{
    public function index(Request $request)
    {
        $page = $request->query('page', 1);

        $news = NewsSection::select('id', 'title', 'date')
            ->latest()
            ->paginate(10, page: $page);

        return inertia('dashboard/news/page', compact('news'));
    }

    public function create()
    {
        return inertia('dashboard/news/create/page');
    }

    public function store(StoreNewsSection $request)
    {
        $validated = $request->validated();

        if ($request->hasFile('image')) {
            $validated['image_url'] = $validated['image']->store('news', 'public');
        }

        NewsSection::create($validated);

        return back();
    }

    public function show(NewsSection $newsSection)
    {
        return inertia('dashboard/news/edit/page');
    }

    public function edit(int $newsId)
    {
        $news = NewsSection::find($newsId);

        return inertia('dashboard/news/edit/page', compact('news'));
    }

    public function update(UpdateNewsSection $request, int $newsId)
    {
        $news = NewsSection::find($newsId);

        if (! $news) {
            throw ValidationException::withMessages(['general' => 'News not found']);
        }

        $validated = $request->validated();

        if ($request->hasFile('image')) {
            if (Storage::disk('public')->exists($news->image_url)) {
                Storage::disk('public')->delete($news->image_url);
            }
            $validated['image_url'] = $validated['image']->store('news', 'public');
        }

        $news->update($validated);

        return back();
    }

    public function destroy(int $newsId)
    {
        $news = NewsSection::find($newsId);

        if (! $news) {
            throw ValidationException::withMessages(['general' => 'News not found']);
        }

        if (Storage::disk('public')->exists($news->image_url)) {
            Storage::disk('public')->delete($news->image_url);
        }

        $news->delete();

        return back();
    }
}
