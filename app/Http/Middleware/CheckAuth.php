<?php

namespace App\Http\Middleware;
use App\Model\UserToken;
use Closure;

class CheckAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $token = $request->bearerToken();
        if(is_null($token)){
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        }

        $checkIfTokenExist = UserToken::where('api_token',$token)->exists();

        if($checkIfTokenExist == false) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        }
        return $next($request);
    }

}
