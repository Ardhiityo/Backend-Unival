<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class NewsSection extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'description',
        'date',
        'image_url',
    ];

    protected static function booted()
    {
        static::creating(function ($model) {
            $model->slug = Str::slug($model->title);
        });
    }
}
