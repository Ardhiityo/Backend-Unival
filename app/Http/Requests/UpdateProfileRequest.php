<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProfileRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->user() != null;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'min:1'],
            'email' => ['required', 'email:dns'],
            'password' => ['nullable', 'min:8', 'confirmed'],
        ];
    }
}
