<?php

namespace App\Http\Resources\Api;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class NewsSectionResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'date' => Carbon::parse($this->date)->translatedFormat('j F Y'),
            'image_url' => Storage::disk('public')->exists($this->image_url) ? Storage::disk('public')->url(this->image_url) : ($this->image_url ? $this->image_url : null),
            'description' => $this->description,
        ];
    }
}
