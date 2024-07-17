<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class SubCategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = Carbon::now();

        $marriageCategoryId = 1;

        $subCategories = [
            ['name' => 'Traiteur Pour Mariage', 'category_id' => $marriageCategoryId, 'created_at' => $now],
            ['name' => 'Lieu de réception', 'category_id' => $marriageCategoryId, 'created_at' => $now],
            ['name' => 'Nagafa (Planification de marriage)', 'category_id' => $marriageCategoryId, 'created_at' => $now],
            ['name' => 'Tyafer / Chocolatier', 'category_id' => $marriageCategoryId, 'created_at' => $now],
            ['name' => 'Photographe et vidéographe', 'category_id' => $marriageCategoryId, 'created_at' => $now],
            ['name' => 'Musique', 'category_id' => $marriageCategoryId, 'created_at' => $now],
            ['name' => 'Serveur Freelance', 'category_id' => $marriageCategoryId, 'created_at' => $now],
            ['name' => 'Femme de Menage Freelance', 'category_id' => $marriageCategoryId, 'created_at' => $now],
            ['name' => 'Agence de voyage (Lien de Miel)', 'category_id' => $marriageCategoryId, 'created_at' => $now],
            ['name' => 'Patisserie / Wedding Cake', 'category_id' => $marriageCategoryId, 'created_at' => $now],
            ['name' => 'Adoul / Cérémonie', 'category_id' => $marriageCategoryId, 'created_at' => $now],
            ['name' => 'Locataire des Robes de mariée et tenues pour le marié', 'category_id' => $marriageCategoryId, 'created_at' => $now]
        ];

        DB::table('sub_categories')->insert($subCategories);

        $feteDeNaissanceCategoryId = 2;

        $feteDeNaissanceSubCategories = [
            ['name' => 'Artiste ou Animateur', 'category_id' => $feteDeNaissanceCategoryId, 'created_at' => $now],
            ['name' => 'Décorateur de Fete', 'category_id' => $feteDeNaissanceCategoryId, 'created_at' => $now],
            ['name' => 'Henné', 'category_id' => $feteDeNaissanceCategoryId, 'created_at' => $now],
            ['name' => 'Lieu de réception', 'category_id' => $feteDeNaissanceCategoryId, 'created_at' => $now],
            ['name' => 'Location de matériel Patissier ou boulanger', 'category_id' => $feteDeNaissanceCategoryId, 'created_at' => $now],
            ['name' => 'Photographer ou Vidéographer', 'category_id' => $feteDeNaissanceCategoryId, 'created_at' => $now],
            ['name' => 'Traiteur Pour Sbouaa', 'category_id' => $feteDeNaissanceCategoryId, 'created_at' => $now]
        ];

        DB::table('sub_categories')->insert($feteDeNaissanceSubCategories);


        $babyShowerCategoryId = 3;

        $babyShowerSubCategories = [
            ['name' => 'Agence Décoration', 'category_id' => $babyShowerCategoryId, 'created_at' => $now],
            ['name' => 'Patisserie / Wedding Cake', 'category_id' => $babyShowerCategoryId, 'created_at' => $now],
            ['name' => 'Traiteur Pour Baby Shower', 'category_id' => $babyShowerCategoryId, 'created_at' => $now],
        ];

        DB::table('sub_categories')->insert($babyShowerSubCategories);


        $anniversaireCategoryId = 4;

        $anniversaireSubCategories = [
            ['name' => 'Anniversaire Pour Enfants', 'category_id' => $anniversaireCategoryId, 'created_at' => $now],
            ['name' => 'Anniversaire Pour Adultes', 'category_id' => $anniversaireCategoryId, 'created_at' => $now],
        ];

        DB::table('sub_categories')->insert($anniversaireSubCategories);



        $conférenceCategoryId = 5;

        $conférenceSubCategories = [
            ['name' => 'Colloque', 'category_id' => $conférenceCategoryId, 'created_at' => $now],
            ['name' => 'Evénement professionnel', 'category_id' => $conférenceCategoryId, 'created_at' => $now],
            ['name' => 'Séminaire', 'category_id' => $conférenceCategoryId, 'created_at' => $now],
        ];

        DB::table('sub_categories')->insert($conférenceSubCategories);
    }
}
