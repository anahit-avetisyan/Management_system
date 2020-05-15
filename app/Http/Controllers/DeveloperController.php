<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Model\Role;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\Model\UserToken;


class DeveloperController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //add where creator_id is Auth id
        $header = $request->header('Authorization');
        $token = '';

        if(Str::startsWith($header,'Bearer')){
            $token = Str::substr($header,7);
        }

        $userId = UserToken::where('api_token',$token)->pluck('user_id')->first();
        $users= User::where('role_id',2)->where('creator_id',$userId)->get();

        return response()->json([
            'developers' => $users,
        ]);
    }

    public function allDevelopers(Request $request)
    {
        
        $users= User::where('role_id',2)->get();

        return response()->json([
            'developers' => $users,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //add creator_id is Auth id
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
        $header = $request->header('Authorization');
        $token = '';

        if(Str::startsWith($header,'Bearer')){
            $token = Str::substr($header,7);
        }
        $userId = UserToken::where('api_token',$token)->pluck('user_id')->first();

        $user = User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'role_id'=>2,
            'creator_id'=>$userId,
            'password' => Hash::make($request['password']),
        ]);

        $token = md5(openssl_random_pseudo_bytes(32));

        UserToken::create([
            'user_id' => $user->id,
            'api_token' => $token,
        ]);
        return response()->json([
            'success' => true,
        ]);
    }

   
   
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $user = User::find($request->id);
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,'.$user->id,
        ]);
    
        $user = User::find($request->id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();

        return response()->json([
            'success' => true,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        User::find($id)->delete();
        
        return response()->json([
            'success' => true,
        ]);
    }
}
