<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateNewsSection extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->user() != null;
    }

    public function rules(): array
    {
        $id = $this->route('newsId');

        return [
            'title' => ['required', 'min:1', 'unique:news_sections,slug,'.$id.',id'],
            'description' => ['required', 'min:1'],
            'date' => ['required', 'date_format:Y-m-d'],
            'image' => ['nullable', 'image', 'max:1080'],
        ];
    }
}
