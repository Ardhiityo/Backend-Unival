<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreServiceSection extends FormRequest
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
            'url' => ['required', 'min:1'],
        ];
    }
}
