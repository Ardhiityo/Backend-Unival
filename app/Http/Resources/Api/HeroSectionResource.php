<?php

namespace App\Http\Resources\Api;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class HeroSectionResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'accreditation' => $this->accreditation,
            'total_industry_partner' => $this->total_industry_partner,
            'total_number_of_graduate' => $this->total_number_of_graduate,
        ];
    }
}
