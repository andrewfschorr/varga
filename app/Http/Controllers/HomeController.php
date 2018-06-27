<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;

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
            $s3 = \Storage::disk('s3');
            $s3->put('avi', $newAviFile);
            $updatedAvi = $newAviFile->hashName();
        }

        if (request('username') !== \Auth::user()->username) {
            $validator = Validator::make($request->all(), [
                'username' => 'required|unique:users',
            ]);
        }

        if (isset($validator) && $validator->fails()) {
            // return
        } else {
            $user = \Auth::user();
            if ($request->has('username')) {
                \Log::debug(request('username'));
                $user->username = request('username');
            }
            if ($request->has('about')) {
                $user->about = request('about');
            }
            if ($updatedAvi) {
                $user->avi = "https://s3.amazonaws.com/localotter/avi/$updatedAvi";
            }
            $user->save();
        }
    }
}
