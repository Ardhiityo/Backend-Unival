<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HeroSection extends Model
{
    protected $fillable = [
        'accreditation',
        'total_industry_partner',
        'total_number_of_graduate',
    ];
}
