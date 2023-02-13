<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Inertia</title>
    @viteReactRefresh
    @vite('resources/ts/app.tsx')
    @inertiaHead
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet">
</head>

<style>
    /* This code needs to move into css file later */
    .mega-menu {
        display: none;
        left: 0;
        position: absolute;
        text-align: left;
        width: 100%;
    }

    .hoverable {
        position: static;
    }

    .hoverable>a:after {
        content: "";
        font-size: 10px;
        padding-left: 6px;
        position: relative;
        top: -1px;
    }

    .hoverable:hover .mega-menu {
        display: block;
    }

</style>

<body>
    @inertia
</body>

</html>
