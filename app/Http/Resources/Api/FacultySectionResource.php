<?php

namespace App\Http\Resources\Api;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FacultySectionResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'title' => $this->title,
            'image_url' => asset($this->image_url),
            'description' => $this->description,
            'detail_url' => $this->detail_url,
        ];
    }
}
