<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStatisticSection;
use App\Http\Requests\UpdateStatisticSection;
use App\Models\StatisticSection;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class StatisticSectionController extends Controller
{
    public function index(Request $request)
    {
        $page = $request->query('page', 1);
        $limit = $request->query('limit', 10);

        $statistics = StatisticSection::select('id', 'title', 'description', 'total')
            ->latest()
            ->paginate($limit, page: $page);

        return inertia('dashboard/statistics/page', compact('statistics'));
    }

    public function store(StoreStatisticSection $request)
    {
        $validated = $request->validated();

        StatisticSection::create($validated);

        return back();
    }

    public function update(UpdateStatisticSection $request, int $statisticId)
    {
        $statistic = StatisticSection::find($statisticId);

        if (! $statistic) {
            throw ValidationException::withMessages(['general' => 'Statistic not found']);
        }

        $validated = $request->validated();

        $statistic->update($validated);

        return back();
    }

    public function destroy(int $statisticId)
    {
        $statistic = StatisticSection::find($statisticId);

        if (! $statistic) {
            throw ValidationException::withMessages(['general' => 'Statistic not found']);
        }

        $statistic->delete();

        return back();
    }
}
