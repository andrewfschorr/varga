<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <link href="{{ hawtHelper('css/app.css') }}" rel="stylesheet">
    @yield('pageStyle')
</head>
<body>
    @yield('content')
    @isset($dataBs)
    <div data-bs={!! json_encode($dataBs) !!}></div>
    @endisset
    <script src="{{ asset('js/vendor.js') }}" defer></script>
    <script src="{{ hawtHelper('js/app.js') }}" defer></script>
    @yield('pageScript')
</body>
</html>
