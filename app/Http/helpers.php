<?php

use Illuminate\Support\HtmlString;

function hawtHelper($path)
{
    $isHawt = file_exists(public_path('/hot'));
    if ($isHawt) {
        if (ends_with($path, '.css')) {
            return new HtmlString('/css/dummy.css');
        }
        return new HtmlString("//localhost:8080/{$path}");
    } else {
        return new HtmlString($path);
    }
}

// function mix($path, $manifestDirectory = '')
// {
//     static $manifests = [];

//     if (! Str::startsWith($path, '/')) {
//         $path = "/{$path}";
//     }

//     if ($manifestDirectory && ! Str::startsWith($manifestDirectory, '/')) {
//         $manifestDirectory = "/{$manifestDirectory}";
//     }

//     if (file_exists(public_path($manifestDirectory.'/hot'))) {
//         $url = file_get_contents(public_path($manifestDirectory.'/hot'));

//         if (Str::startsWith($url, ['http://', 'https://'])) {
//             return new HtmlString(Str::after($url, ':').$path);
//         }

//         return new HtmlString("//localhost:8080{$path}");
//     }

//     $manifestPath = public_path($manifestDirectory.'/mix-manifest.json');

//     if (! isset($manifests[$manifestPath])) {
//         if (! file_exists($manifestPath)) {
//             throw new Exception('The Mix manifest does not exist.');
//         }

//         $manifests[$manifestPath] = json_decode(file_get_contents($manifestPath), true);
//     }

//     $manifest = $manifests[$manifestPath];

//     if (! isset($manifest[$path])) {
//         report(new Exception("Unable to locate Mix file: {$path}."));

//         if (! app('config')->get('app.debug')) {
//             return $path;
//         }
//     }

//     return new HtmlString($manifestDirectory.$manifest[$path]);
// }

// function asset($path, $secure = null)
// {
//     return app('url')->asset($path, $secure);
// }
