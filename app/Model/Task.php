<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Task extends Model
{
    protected $table = 'tasks';

    protected $fillable = ['task','developer_id','manager_id','status_id'];

    public function status(){
        return $this->belongsTo(Status::class,'status_id','id');
    }

    public function developer(){
        return $this->belongsTo(User::class,'developer_id','id');
    }
    
    public function manager(){
        return $this->belongsTo(User::class,'manager_id','id');
    }
}
