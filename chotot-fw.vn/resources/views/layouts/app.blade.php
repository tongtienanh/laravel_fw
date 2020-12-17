<!doctype html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
    @yield('style')
</head>
<body>
@include('components.header.main')
<main role="main">
    @yield('main')
</main>

@include('components.footer.main')
@yield('script')
</body>
</html>
