<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FacultySection extends Model
{
    protected $fillable = [
        'title',
        'image_url',
        'description',
        'detail_url',
    ];
}
