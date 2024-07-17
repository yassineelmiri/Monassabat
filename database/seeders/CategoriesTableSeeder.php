<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = Carbon::now();
        $categories = [
            ['name' => 'Marriage', 'created_at' => $now],
            ['name' => 'Fete De Naissance', 'created_at' => $now],
            ['name' => 'BabyShower', 'created_at' => $now],
            ['name' => 'Anniversaire', 'created_at' => $now],
            ['name' => 'Conférence', 'created_at' => $now]
        ];

        DB::table('categories')->insert($categories);
    }
}
