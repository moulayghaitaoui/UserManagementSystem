<?php

namespace App\Http\Controllers\Auth;
use Inertia\Response as InertiaResponse;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

use Inertia\Response;
use Illuminate\Http\RedirectResponse;
class LoginController extends Controller
{
    // show login form
    public function showLoginForm()
    {
        return Inertia::render('Auth/Login');
    }



    public function login(Request $request): RedirectResponse|InertiaResponse
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $user = Auth::user();

            if ($user->user_type !== 'ADMIN') {
                Auth::logout();
                return redirect()->back()->withErrors([
                    'email' => 'Unauthorized. Only ADMINs can access the back office.',
                ])->onlyInput('email');
            }

            $request->session()->regenerate();

            return Inertia::location(route('users.index'));
        }

        return redirect()->back()->withErrors([
            'email' => 'Invalid credentials.',
        ])->onlyInput('email');
    }



    //log out
    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/login');
    }
}
