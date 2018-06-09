
@extends('layouts.varga')
@section('pageStyle')
<link href="{{ hawtHelper('css/welcome.css') }}" rel="stylesheet">
@endsection


@section('content')
<div class="container">
   <div id="root"></div>
</div>
@endsection
@section('pageScript')
<script src="{{ hawtHelper('js/welcome.js') }}" defer></script>
@endsection
