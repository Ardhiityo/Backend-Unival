<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class HeroSection extends Model
{
    protected $fillable = [
        'accreditation',
        'total_industry_partner',
        'total_number_of_graduate',
    ];

    protected function totalIndustryPartner(): Attribute
    {
        return Attribute::make(
            get: fn (string $value) => number_format($value, thousands_separator: '.')
        );
    }

    protected function totalNumberOfGraduate(): Attribute
    {
        return Attribute::make(
            get: fn (string $value) => number_format($value, thousands_separator: '.')
        );
    }
}
