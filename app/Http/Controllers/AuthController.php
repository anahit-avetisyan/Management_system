<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\User;
use App\Model\UserToken;
use Illuminate\Support\Facades\Auth;



class AuthController extends Controller
{
     
 
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        $user = User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'role_id'=>1,
            'password' => Hash::make($request['password']),
        ]);

        $token = md5(openssl_random_pseudo_bytes(32));

        UserToken::create([
            'user_id' => $user->id,
            'api_token' => $token,
        ]);

        return response()->json([
            'success' => true,
            'token' => $token,
        ]);
    }

  

    public function login(Request $request)
    {
        
        $request->validate([
            'email' => 'required|email|exists:users,email',
            'password' => 'required',
        ]);

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {

            $user = User::where('email', $request->email)->first();
            $userToken = UserToken::where('user_id', $user->id)->first();
            $token = $userToken ? $userToken->api_token :'';

            if (!$userToken){
                $token = md5(openssl_random_pseudo_bytes(32));
                UserToken::create([
                    'api_token' => $token,
                    'user_id' => $user->id,
                ]);
            }
            return response()->json([
                'success' => true,
                'token' =>$token,
            ]);

        } else {
            return response()->json([
                'success' => false,
                'errors' => [
                    'password' => 'Password or email is incorrect'
                ] 
            ]);
        }
    }

    public function logout(Request $request)
    {
        Auth::logout();
        return response()->json([
            'success' => true
        ], 200);
    }
    
}
