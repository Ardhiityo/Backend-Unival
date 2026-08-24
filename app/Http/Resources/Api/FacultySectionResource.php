<?php

namespace App\Http\Resources\Api;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class FacultySectionResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'title' => $this->title,
            'image_url' => Storage::disk('public')->url($this->image_url),
            'description' => $this->description,
            'detail_url' => $this->detail_url,
        ];
    }
}
