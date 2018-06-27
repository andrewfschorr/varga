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

    public function updateProfile(Request $request) {
        $newAviFile = $request->file('newAviFile');
        // regular laravel hasFile methods don't seem to work
        if ($newAviFile) {
            \Log::debug($request->newAviFile->path());
            \Log::debug($request->newAviFile->extension());
            $s3 = \Storage::disk('s3');
            $s3->put('avi', $newAviFile);
        }
        \Log::debug($request->input('username'));
    }
}
