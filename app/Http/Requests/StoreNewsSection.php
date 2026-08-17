<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreNewsSection extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->user() != null;
    }

    public function rules(): array
    {
        return [
            'title' => ['required', 'min:1'],
            'description' => ['required', 'min:1'],
            'date' => ['required', 'date_format:Y-m-d'],
            'image' => ['required', 'image', 'max:1080'],
        ];
    }
}
