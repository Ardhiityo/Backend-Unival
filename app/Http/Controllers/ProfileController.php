<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateProfileRequest;
use App\Models\User;
use Illuminate\Validation\ValidationException;

class ProfileController extends Controller
{
    public function update(UpdateProfileRequest $request, int $userId)
    {
        $user = User::find($userId);

        if (! $user) {
            return ValidationException::withMessages(['general' => 'User not found']);
        }

        $validated = $request->validated();

        $user->update($validated);

        return back();
    }
}
