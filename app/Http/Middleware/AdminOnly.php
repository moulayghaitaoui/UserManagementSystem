<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AdminOnly
{
    public function handle($request, Closure $next)
    {
        if (Auth::check() && Auth::user()->user_type === 'ADMIN') {
            return $next($request);
        }

        abort(403);
    }

}