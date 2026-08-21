<?php

namespace App\Http\Controllers;

use App\Models\NewsSection;
use App\Models\ServiceSection;
use Carbon\Carbon;

class DashboardController extends Controller
{
    public function index()
    {
        $total_news_on_this_month = NewsSection::whereMonth('date', Carbon::now()->month)
            ->whereYear('date', Carbon::now()->year)->count();

        $total_news_on_this_month_formatted = number_format($total_news_on_this_month, thousands_separator: '.');

        $news_of_all_time_formatted = number_format(NewsSection::count());

        $services_of_all_time_formatted = number_format(ServiceSection::count());

        $current_date = intval(Carbon::now()->format('d'));

        $average_news_on_this_month_formatted = number_format(
            $total_news_on_this_month / $current_date,
            thousands_separator: '.'
        );

        $last_week = Carbon::now()->subWeek()->toDateString();
        $current_week = Carbon::now()->toDateString();

        $news = NewsSection::orderBy('date')->whereBetween('date', [$last_week, $current_week])->get();

        return inertia('dashboard/page', compact(
            'total_news_on_this_month_formatted',
            'news_of_all_time_formatted',
            'services_of_all_time_formatted',
            'average_news_on_this_month_formatted',
            'current_date',
            'current_week',
            'last_week',
            'news'
        )
        );
    }
}
