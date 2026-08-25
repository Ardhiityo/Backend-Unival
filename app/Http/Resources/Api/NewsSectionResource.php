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
        $image_url = $this->image_url;

        if ($image_url) {
            $disk = Storage::disk('public');

            if ($disk->exists($image_url)) {
                $image_url = $disk->url($image_url);
            }
        }

        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'date' => Carbon::parse($this->date)->translatedFormat('j F Y'),
            'image_url' => $image_url,
            'description' => $this->description,
        ];
    }
}
