<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Annonce extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function sub_Category()
    {
        return $this->belongsTo(Sub_Category::class,'sub_category_id');
    }

    public function sous_Category()
    {
        return $this->belongsTo(Sous_Category::class,'sous_category_id');
    }

    public function favoris()
    {
        return $this->hasMany(Favoris::class);
    }

    protected $fillable = [
        'title',
        'description',
        'image',
        'price',
        'location',
        'accepted_at',
        'user_id',
        'sub_category_id',
        'sous_category_id',
    ];
}
