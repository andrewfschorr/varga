<?php

use Illuminate\Support\HtmlString;

function hawtHelper($path, $secure = null)
{
    $isHawt = file_exists(public_path('/hot'));
    if ($isHawt) {
        if (ends_with($path, '.css')) {
            return new HtmlString('/css/dummy.css');
        }
        return new HtmlString("//localhost:8080/{$path}");
    } else {
        return app('url')->asset($path, $secure);
    }
}