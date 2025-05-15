<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class UserController extends Controller
{

    public function index(Request $request)
    {
        $users = User::paginate(15)->through(fn($user) => [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'user_type' => $user->user_type,
        ]);
        return Inertia::render('Users/index', [
            'users' => $users,
        ]);
    }
    public function indexJSON(Request $request)
    {

        $keyword = $request->input('keyword', '');

        $users = User::where('name', 'like', '%' . $keyword . '%')
            ->orWhere('email', 'like', '%' . $keyword . '%')
            ->orWhere('user_type', 'like', '%' . $keyword . '%')
            ->paginate(15)
            ->through(fn($user) => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'user_type' => $user->user_type,
            ]);


        return response()->json([
            'users' => $users,
        ]);
    }



    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return back()->with('success', 'User deleted');
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
            'date_of_birth' => 'required|date',
            'user_type' => 'required|in:ADMIN,STANDARD',
        ]);

        User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => bcrypt($validated['password']),
            'date_of_birth' => $validated['date_of_birth'],
            'user_type' => $validated['user_type'],
        ]);
        // return Inertia::render('Users/AddUser');
        return Inertia::location(route('users.index'));
        //return redirect()->route('users.index')->with('success', 'تمت إضافة المستخدم بنجاح');
    }
    public function create()
    {
        return Inertia::render('Users/AddUser');
    }


    public function getUserPairs($sum)
    {
        $users = User::where('user_type', 'STANDARD')->get();

        $pairs = [];
        $count = count($users);

        for ($i = 0; $i < $count; $i++) {
            for ($j = $i + 1; $j < $count; $j++) {
                $age1 = $users[$i]->age;
                $age2 = $users[$j]->age;
                if ($age1 + $age2 == $sum) {
                    $pairs[] = [
                        'user1' => $users[$i],
                        'user2' => $users[$j],
                    ];
                }
            }
        }

        return response()->json($pairs);
    }




    public function ageDistribution()
    {
        // Initialize the predefined age ranges
        $ranges = [
            '15-30' => 0,
            '31-45' => 0,
            '46-60' => 0,
            '61-75' => 0,
        ];

        // Get users, optionally filter by user_type or other criteria
        $users = User::where('user_type', 'STANDARD')->get();

        // Iterate through users to count the users in each age range
        foreach ($users as $user) {
            $age = $user->age;

            if ($age >= 15 && $age <= 30) {
                $ranges['15-30']++;
            } elseif ($age >= 31 && $age <= 45) {
                $ranges['31-45']++;
            } elseif ($age >= 46 && $age <= 60) {
                $ranges['46-60']++;
            } elseif ($age >= 61 && $age <= 75) {
                $ranges['61-75']++;
            }
        }

        // Return the age distribution in the response
        return response()->json($ranges);
    }



}
