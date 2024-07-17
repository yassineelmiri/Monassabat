<?php

namespace App\Http\Controllers;

use App\Models\Annonce;
use App\Models\Client;
use App\Models\Favoris;
use App\Models\Reclamation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ClientController extends Controller
{
  

    public function reclamation(Request $request)
    {
        $user = Auth::user();

        if ($user->role !== 'client') {
            return response()->json(['error' => 'Only clients can create reclamations.'], 403);
        }

        $validator = Validator::make($request->all(), [
            'message' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $reclamation = Reclamation::create([
            'message' => $request->message,
            'user_id' => $user->id,
        ]);

        return response()->json([
            "status" => "success",
            "message" => "Reclamation created successfully",
            "reclamation" => $reclamation
        ], 201);
    }

    public function favoris(Request $request)
    {
        $user = Auth::user();
    
        if ($user->role !== 'client') {
            return response()->json(['error' => 'Unauthorized'], 403);
        }
    
        $validator = Validator::make($request->all(), [
            'annonce_id' =>'required|integer',
        ]);
    
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
    
        $favoris = Favoris::where('user_id', $user->id)
                          ->where('annonce_id', $request->annonce_id)
                          ->first();
    
        if ($favoris) {
            $favoris->delete();
            return response()->json([
                'status' => 'success',
                'message' => 'favoris removed successfully',
                'favoris' => null  
            ], 200);
        } 
        else {
            $favoris = Favoris::create([
                'annonce_id' => $request->annonce_id,
                'user_id' => $user->id,
            ]);
    
            return response()->json([
                'status' => 'success',
                'message' => 'favoris set successfully',
                'favoris' => $favoris
            ], 201);
        }
    }

    public function checkFavoris(Request $request)
    {
        $user = Auth::user();
        $annonceId = $request->input('annonce_id');

        $favoris = Favoris::where('user_id', $user->id)
                        ->where('annonce_id', $annonceId)
                        ->exists();

        return response()->json(['favorited' => $favoris]);
    }

    
        public function getAnnonces()
        {
            try {
                $annonces = Annonce::whereNotNull('accepted_at')
                    ->with('user', 'sub_Category', 'sous_Category')
                    ->paginate(6);
        
                $formattedAnnonces = $annonces->map(function ($annonce) {
                    return [
                        'id' => $annonce->id,
                        'title' => $annonce->title,
                        'description' => $annonce->description,
                        'location' => $annonce->location,
                        'sub_category_id' => $annonce->sub_category_id,
                        'sous_category_id' => $annonce->sous_category_id,
                        'images' => json_decode($annonce->image),
                        'price' => $annonce->price,
                        'sub_name' => $annonce->sub_Category->name,
                        'firstName' => $annonce->user->firstName,
                        'lastName' => $annonce->user->lastName,
                        'phone' => $annonce->user->phone,
                        'created_at' => $annonce->created_at,
                    ];
                });
        
                return response()->json(['data' => $formattedAnnonces]);
        
            } catch (\Exception $e) {
                return response()->json(['error' => 'Failed to fetch annonces', 'message' => $e->getMessage()], 500);
            }
        }

        public function getAllAcceptedAnnonces()
        {
            try {
            $annonces = Annonce::whereNotNull('accepted_at')->with('user', 'sub_Category', 'sous_Category')->paginate(50);
            $formattedAnnonces = $annonces->map(function ($annonce) {
                return [
                    'id' => $annonce->id,
                    'title' => $annonce->title,
                    'description' => $annonce->description,
                    'location' => $annonce->location,
                    'sub_category_id' => $annonce->sub_category_id,
                    'sous_category_id' => $annonce->sous_category_id,
                    'images' => json_decode($annonce->image),
                    'price' => $annonce->price,
                    'sub_name' => $annonce->sub_Category->name,
                    'firstName' => $annonce->user->firstName,
                    'lastName' => $annonce->user->lastName,
                    'phone' => $annonce->user->phone,
                    'created_at' => $annonce->created_at,
                ];
            });
            return response()->json(['data' => $formattedAnnonces]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to fetch annonces', 'message' => $e->getMessage()], 500);
        }

    }

    public function getAllDetails()
    {
        $annonces = Annonce::with(['user', 'sub_Category', 'sous_Category'])->get();
        return response()->json($annonces);
    }
    
    public function getAnnonceDetails($id)
    {
        try {
            $annonce = Annonce::with(['user', 'sub_Category'])->findOrFail($id);
    
            $formattedAnnonce = [
                'id' => $annonce->id,
                'title' => $annonce->title,
                'description' => $annonce->description,
                'location' => $annonce->location,
                'sub_category_id' => $annonce->sub_category_id,
                'sous_category_id' => $annonce->sous_category_id,
                'image' => json_decode($annonce->image),
                'price' => $annonce->price,
                'sub_name' => $annonce->sub_Category->name,
                'firstName' => $annonce->user->firstName,
                'lastName' => $annonce->user->lastName,
                'phone' => $annonce->user->phone,
                'created_at' => $annonce->created_at,
                
            ];
    
            return response()->json([
                'status' => 'success',
                'annonce' => $formattedAnnonce
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'An error occurred while fetching announcement details.'], 500);
        }
    }

    public function filterAnnonces(Request $request)
    {
        try {
            $category = $request->query('category');
            $subCategory = $request->query('subCategory');
            $sousCategory = $request->query('sousCategory');

            $query = Annonce::query()
                ->select('annonces.*', 'sub_categories.name as sub_category_name', 'categories.name as category_name')
                ->join('sub_categories', 'annonces.sub_category_id', '=', 'sub_categories.id')
                ->join('categories', 'sub_categories.category_id', '=', 'categories.id');

            if ($category) {
                $query->where('categories.name', $category);
            }

            if ($subCategory) {
                $query->where('sub_categories.name', $subCategory);
            }

            if ($sousCategory) {
                $query->where('sous_categories.name', $sousCategory);
            }
            $annonces = $query->get();
            $annonces = $annonces->map(function ($annonce) {
                return [
                    'annonce' => $annonce,
                    'images' => json_decode($annonce->image),
                ];
            });

            return response()->json([
                'status' => 'success',
                'annonces' => $annonces,
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'An error occurred while fetching annonces.'], 500);
        }
    }
    
    



  
}
