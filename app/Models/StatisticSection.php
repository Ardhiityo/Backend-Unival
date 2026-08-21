<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class StatisticSection extends Model
{
    protected $fillable = [
        'title',
        'description',
        'total',
    ];

    protected function total(): Attribute
    {
        return Attribute::make(
            get: fn (string $value) => number_format($value, thousands_separator: '.')
        );
    }
}
