<?php
namespace App\Http\Controllers;

use App\Models\Annonce;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PrestataireController extends Controller
{
    public function getMyAnnonces()
{
    $user_id = Auth::guard('api')->user()->id;

    $annonces = Annonce::where('user_id', $user_id)->with("sub_Category")->get();

    // Map over the annonces to decode the 'image' field from JSON to array of strings
    $formattedAnnonces = $annonces->map(function ($annonce) {
        return [
            'id' => $annonce->id,
            'title' => $annonce->title,
            'description' => $annonce->description,
            'location' => $annonce->location,
            'sub_category_id' => $annonce->sub_category_id,
            'sous_category_id' => $annonce->sous_category_id,
            'image' => json_decode($annonce->image),
            'price' => $annonce->price,

            'accepted_at' => $annonce->accepted_at,
            'sub_name'=>$annonce->sub_Category->name,
        ];
    });

    return response()->json([
        'status' => 'success',
        'annonces' => $formattedAnnonces
    ]);
}
    public function createAnnonce(Request $request)
    {
        $user_id = Auth::guard('api')->user()->id;

        try {

            $request->validate([
                'title' => 'required|string',
                'description' => 'required|string',
                'location' => 'required|string',
                'sub_category_id' => 'required|integer',
                'sous_category_id' => 'nullable',
                'image' => 'nullable',
                'image.*' => 'file|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'price' => 'required|integer',
            ]);

            $pictureUrls = [];

            if ($request->hasFile('image')) {
                foreach ($request->file('image') as $file) {
                    if ($file->isValid()) {
                        $pictureName = time() . '_' . $file->getClientOriginalName();
                        $file->storeAs('public/images', $pictureName);
                        $pictureUrls[] = 'storage/images/' . $pictureName;
                    } else {
                        return response()->json(['error' => 'File upload failed or invalid file.'], 400);
                    }
                }
            }

            $pictureUrlsJson = json_encode($pictureUrls);


            $annonce = Annonce::create([
                'title' => $request->title,
                'description' => $request->description,
                'location' => $request->location,
                'sub_category_id' => $request->sub_category_id,
                'sous_category_id' => $request->sous_category_id,
                'image' => $pictureUrlsJson,
                'user_id' => $user_id,
                'price' => $request->price,
            ]);

            return response()->json([
                "status" => "success",
                "message" => "Annonce created successfully",
                "annonce" => $annonce
            ], 201);

        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Annonce creation failed',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
