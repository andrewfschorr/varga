@extends('layouts.varga') @section('pageStyle')
<link href="{{ hawtHelper('css/home.css') }}" rel="stylesheet"> @endsection @section('content')
<div id="root"></div>
@endsection @section('pageScript')
<script src="{{ hawtHelper('js/home.js') }}" defer></script> @endsection