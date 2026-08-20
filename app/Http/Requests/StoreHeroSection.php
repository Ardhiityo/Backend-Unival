<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreHeroSection extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->user() != null;
    }

    public function rules(): array
    {
        return [
            'accreditation' => ['required', 'min:1'],
            'total_industry_partner' => ['required', 'numeric', 'min:1'],
            'total_number_of_graduate' => ['required', 'numeric', 'min:1'],
        ];
    }
}
