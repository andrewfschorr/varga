@extends('layouts.varga')
@section('pageStyle')
<!-- <link href="{{ hawtHelper('css/home.css') }}" rel="stylesheet"> -->
@endsection
@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif

                    You are logged in!
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@section('pageScript')
<script src="{{ hawtHelper('js/home.js') }}" defer></script>
@endsection
