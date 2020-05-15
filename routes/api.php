<?php

use Illuminate\Http\Request;
use App\Http\Middleware\CheckAuth;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

 
//auth
Route::post('login', 'AuthController@login');
Route::post('/register', 'AuthController@register');
Route::get('/logout', 'AuthController@logout');
Route::get('/user', 'UserController@getUser')->middleware('auth.check');

//tasks
Route::get('/tasks', 'TaskController@index')->middleware('auth.check');
Route::put('/tasks', 'TaskController@update');
Route::post('/tasks', 'TaskController@store');
Route::delete('/task/{id}', 'TaskController@destroy');
Route::put('/change-task-status','TaskController@changeTaskStatus');

 //statuses
Route::get('/statuses', 'StatusController@index');

//developers
Route::get('/developers', 'DeveloperController@index')->middleware('auth.check');
Route::put('/developers', 'DeveloperController@update');
Route::post('/developers', 'DeveloperController@store');
Route::delete('/developer/{id}', 'DeveloperController@destroy');
Route::get('/all-developers', 'DeveloperController@allDevelopers');
