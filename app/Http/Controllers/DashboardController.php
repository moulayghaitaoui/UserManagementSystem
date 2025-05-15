<?php

namespace App\Http\Controllers;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class DashboardController extends Controller
{



    public function index()
    {
        $standardCount = User::where('user_type', 'STANDARD')->count();//

        return Inertia::render('Dashboard', [
            'standardUserCount' => $standardCount,
        ]);
    }


}
