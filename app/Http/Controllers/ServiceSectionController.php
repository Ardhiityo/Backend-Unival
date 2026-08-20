<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreServiceSection;
use App\Http\Requests\UpdateServiceSection;
use App\Models\ServiceSection;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class ServiceSectionController extends Controller
{
    public function index(Request $request)
    {
        $page = $request->query('page', 1);
        $limit = $request->query('limit', 10);

        $news = ServiceSection::select('id', 'title', 'description', 'url')
            ->latest()
            ->paginate($limit, page: $page);

        return inertia('dashboard/services/page', compact('news'));
    }

    public function store(StoreServiceSection $request)
    {
        $validated = $request->validated();

        ServiceSection::create($validated);

        return back();
    }

    public function update(UpdateServiceSection $request, int $serviceId)
    {
        $service = ServiceSection::find($serviceId);

        if (! $service) {
            throw ValidationException::withMessages(['general' => 'Service not found']);
        }

        $validated = $request->validated();

        $service->update($validated);

        return back();
    }

    public function destroy(int $serviceId)
    {
        $service = ServiceSection::find($serviceId);

        if (! $service) {
            throw ValidationException::withMessages(['general' => 'Service not found']);
        }

        $service->delete();

        return back();
    }
}
