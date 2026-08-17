<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NewsSection extends Model
{
    protected $fillable = [
        'title',
        'description',
        'date',
        'image_url',
    ];
}
