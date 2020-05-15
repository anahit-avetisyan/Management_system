<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Status;

class StatusController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $statuses = Status::get();
        
        return response()->json([
            'statuses' => $statuses,
        ]);
    }

    
}
