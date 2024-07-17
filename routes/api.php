<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\PrestataireController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [AuthController::class, 'addUser']);
Route::post('login', [AuthController::class, 'login']);

Route::get('getFiltredAnnonces', [ClientController::class, 'filterAnnonces']);
Route::get('/getAnnonceDetails/{id}', [ClientController::class, 'getAnnonceDetails']);

Route::middleware('auth:api')->group(function () {
    Route::post('/reclamation', [ClientController::class, 'reclamation']);
    Route::post('/favoris', [ClientController::class, 'favoris']);
    Route::get('/favoris/check', [ClientController::class, 'check']);
    Route::get('/getAnnonces', [ClientController::class, 'getAnnonces']);
    Route::get('/getAllAcceptedAnnonces', [ClientController::class, 'getAllAcceptedAnnonces']);
    Route::get('/getAllDetails', [ClientController::class, 'getAllDetails']);




    Route::post('/banUsers', [AdminController::class, 'banUsers']);
    Route::get('/getAllPrestataires', [AdminController::class, 'getAllPrestataires']);
    Route::get('/getAllClients', [AdminController::class, 'getAllClients']);
    Route::get('/getAllReclamations', [AdminController::class, 'getAllReclamations']);
    Route::get('/getAllAnnonces', [AdminController::class, 'getAllAnnonces']);
    Route::get('/getLatestPrestataires', [AdminController::class, 'getLatestPrestataires']);
    Route::get('/getLatestClients', [AdminController::class, 'getLatestClients']);
    Route::get('/getLatestAnnonces', [AdminController::class, 'getLatestAnnonces']);
    Route::get('/getLatestReclamations', [AdminController::class, 'getLatestReclamations']);
    Route::get('/countPrestataires', [AdminController::class, 'countPrestataires']);
    Route::get('/countClients', [AdminController::class, 'countClients']);
    Route::get('/countAnnonces', [AdminController::class, 'countAnnonces']);
    Route::get('/countReclamations', [AdminController::class, 'countReclamations']);
    Route::delete('/deleteAnnonces/{id}', [AdminController::class, 'destroy']);
    Route::post('/acceptAnnonce/{id}', [AdminController::class, 'acceptAnnonce']);
    Route::delete('/deleteReclamation/{id}', [AdminController::class, 'destroyReclamations']);




    Route::post('/annonce/create', [PrestataireController::class, 'createAnnonce']);
    Route::get('/getMyAnnonces', [PrestataireController::class, 'getMyAnnonces']);





});
