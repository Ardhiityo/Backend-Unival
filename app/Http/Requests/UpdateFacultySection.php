<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateFacultySection extends FormRequest
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
            'detail_url' => ['required', 'min:1'],
            'image' => ['nullable', 'image', 'max:1080'],
        ];
    }
}
