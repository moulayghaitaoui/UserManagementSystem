<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // إنشاء 1000 مستخدم عادي
        User::factory()->count(1000)->create();

        // إنشاء مسؤول
        User::create([
            'name' => 'Admin',
            'email' => 'admin@something.com',
            'password' => bcrypt('password'),
            'date_of_birth' => '1990-01-01',
            'user_type' => 'ADMIN',
        ]);
    }
}