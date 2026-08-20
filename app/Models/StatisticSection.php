<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StatisticSection extends Model
{
    protected $fillable = [
        'title',
        'description',
        'total',
    ];
}
