<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\User;

class UserToken extends Model
{
    protected $table = 'users_tokens';

    protected $fillable = ['user_id','api_token'];

    public function status(){
        return $this->belongsTo(User::class,'user_id','id');
    }
}
