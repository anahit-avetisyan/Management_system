<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Task;
use Illuminate\Support\Str;
use App\User;
use App\Model\UserToken;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $header = $request->header('Authorization');
        $token = '';

        if(Str::startsWith($header,'Bearer')){
            $token = Str::substr($header,7);
        }
        
        $userId = UserToken::where('api_token',$token)->pluck('user_id')->first();
    
        $userRole = User::where('id',$userId)->pluck('role_id')->first();
        if($userRole==2){
        
            $tasks = Task::with('status','manager','developer')->where('developer_id',$userId)->get();
        }else{
            $tasks = Task::with('status','manager','developer')->orWhere('manager_id',$userId)->orWhere('developer_id',null)->get();
        }
       
        return response()->json([
            'tasks' => $tasks??[],
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
        $header = $request->header('Authorization');
        $token = '';
        if(Str::startsWith($header,'Bearer')){
            $token = Str::substr($header,7);
        }
        $userId = UserToken::where('api_token',$token)->pluck('user_id')->first();
    
        Task::create([
            'task' => $request['task'],
            'developer_id' => $request['developer_id'] ? $request['developer_id']:null,
            'status_id'=>$request['developer_id'] ?2:1,
            'manager_id'=>$userId
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
        $task = Task::find($request['id']);
        
        $task->update(['task' => $request['task'],
        'developer_id' => $request['developer_id'] ? $request['developer_id']:null,
        'status_id'=>$request['developer_id'] ?2:1,
        'manager_id'=>$task->manager_id
        ]);
         
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
        Task::find($id)->delete();
        
        return response()->json([
            'success' => true,
        ]);
    }

    public function changeTaskStatus(Request $request)
    {
        $task = Task::find($request['id']);
        
        $task->update([
        'status_id'=>$request['status_id'],
        ]);
         
        return response()->json([
            'success' => true,
        ]);
    }

    
}
