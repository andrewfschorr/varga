<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = [
            'csrfToken' => csrf_token(),
            'user' => \Auth::user()->toArray(),
        ];
        return view('home', [
            'dataBs' => $data,
        ]);
    }
}
