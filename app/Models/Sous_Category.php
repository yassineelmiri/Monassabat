<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sous_Category extends Model
{
    use HasFactory;

    protected $table = 'sous_categories';
    
    public function annonces()
    {
        return $this->hasMany(Annonce::class);
    }
}
