<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SousCategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = Carbon::now();

        $lieuDeReceptionSubCategoryId = 2;

        $lieuDeReceptionSousCategories = [
            ['name' => 'Salle de fete', 'sub_category_id' => $lieuDeReceptionSubCategoryId, 'created_at' => $now],
            ['name' => 'Villa privée', 'sub_category_id' => $lieuDeReceptionSubCategoryId, 'created_at' => $now],
            ['name' => 'Salle de Réception', 'sub_category_id' => $lieuDeReceptionSubCategoryId, 'created_at' => $now],
        ];

        DB::table('sous_categories')->insert($lieuDeReceptionSousCategories);

        $musicSubCategoryId = 6;

        $musicSousCategories = [
            ['name' => 'Orchester', 'sub_category_id' => $musicSubCategoryId, 'created_at' => $now],
            ['name' => 'Orcheste Chaabi / Tarab', 'sub_category_id' => $musicSubCategoryId, 'created_at' => $now],
            ['name' => 'DJ (Animateur)', 'sub_category_id' => $musicSubCategoryId, 'created_at' => $now],
            ['name' => 'Issawa / DQAYQYA', 'sub_category_id' => $musicSubCategoryId, 'created_at' => $now],
            ['name' => 'Awniyat', 'sub_category_id' => $musicSubCategoryId, 'created_at' => $now],
            ['name' => 'Amdah', 'sub_category_id' => $musicSubCategoryId, 'created_at' => $now],
        ];

        DB::table('sous_categories')->insert($musicSousCategories);


        $anniversairePourEnfantsSubCategoryId = 23;

        $anniversairesPourEnfantsSousCategories = [
            ['name' => 'Traiteur Pour Anniversaire Enfants', 'sub_category_id' => $anniversairePourEnfantsSubCategoryId, 'created_at' => $now],
            ['name' => 'Animateur', 'sub_category_id' => $anniversairePourEnfantsSubCategoryId, 'created_at' => $now],
            ['name' => 'Clown', 'sub_category_id' => $anniversairePourEnfantsSubCategoryId, 'created_at' => $now],
            ['name' => 'Patissier ou Boulanger', 'sub_category_id' => $anniversairePourEnfantsSubCategoryId, 'created_at' => $now],
            ['name' => 'Décorateur de Fete', 'sub_category_id' => $anniversairePourEnfantsSubCategoryId, 'created_at' => $now],
            ['name' => 'Lieu de Réception', 'sub_category_id' => $anniversairePourEnfantsSubCategoryId, 'created_at' => $now],
            ['name' => 'Photographe et Vidéographer', 'sub_category_id' => $anniversairePourEnfantsSubCategoryId, 'created_at' => $now],
            ['name' => 'Patisserie / Wedding Cake', 'sub_category_id' => $anniversairePourEnfantsSubCategoryId, 'created_at' => $now],
            ['name' => 'Locataire de jeux et dattractions', 'sub_category_id' => $anniversairePourEnfantsSubCategoryId, 'created_at' => $now],
            ['name' => 'Magasin de déguisements', 'sub_category_id' => $anniversairePourEnfantsSubCategoryId, 'created_at' => $now],
        ];

        DB::table('sous_categories')->insert($anniversairesPourEnfantsSousCategories);

        $anniversairePourAdultesSubCategoryId = 24;

        $anniversairePourAdultesSousCategories = [
            ['name' => 'Traiteur Anniversaire Adulte', 'sub_category_id' => $anniversairePourAdultesSubCategoryId, 'created_at' => $now],
            ['name' => 'Patissier ou Boulanger', 'sub_category_id' => $anniversairePourAdultesSubCategoryId, 'created_at' => $now],
            ['name' => 'Décorateur de Fete', 'sub_category_id' => $anniversairePourAdultesSubCategoryId, 'created_at' => $now],
            ['name' => 'Photographe et Vidéographer', 'sub_category_id' => $anniversairePourAdultesSubCategoryId, 'created_at' => $now],
            ['name' => 'DJ ou groupe de Musique', 'sub_category_id' => $anniversairePourAdultesSubCategoryId, 'created_at' => $now],
            ['name' => 'Lieu de Réception', 'sub_category_id' => $anniversairePourAdultesSubCategoryId, 'created_at' => $now],
        ];

        DB::table('sous_categories')->insert($anniversairePourAdultesSousCategories);


        $colloqueSubCategoryId = 25;

        $colloqueSousCategories = [
            ['name' => 'Traiteur Conférence', 'sub_category_id' => $colloqueSubCategoryId, 'created_at' => $now],
            ['name' => 'Salle Hotel', 'sub_category_id' => $colloqueSubCategoryId, 'created_at' => $now],
        ];

        DB::table('sous_categories')->insert($colloqueSousCategories);

        
        $evénementProfessionnelSubCategoryId = 26;

        $evénementProfessionnelSousCategories = [
            ['name' => 'Traiteur pour Event pro', 'sub_category_id' => $evénementProfessionnelSubCategoryId, 'created_at' => $now],
            ['name' => 'Salle Hotel', 'sub_category_id' => $evénementProfessionnelSubCategoryId, 'created_at' => $now],
        ];

        DB::table('sous_categories')->insert($evénementProfessionnelSousCategories);

        $séminaireSubCategoryId = 27;

        $séminaireSousCategories = [
            ['name' => 'Traiteur Pour Séminaire', 'sub_category_id' => $séminaireSubCategoryId, 'created_at' => $now],
            ['name' => 'Salle Hotel', 'sub_category_id' => $séminaireSubCategoryId, 'created_at' => $now],
        ];

        DB::table('sous_categories')->insert($séminaireSousCategories);
    }
}
