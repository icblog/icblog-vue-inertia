<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    {!! str_replace('<title>','<title inertia>', \App\Lib\Meta::render()) !!}
        <!-- ICON -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
      <!-- Font -->
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Russo+One&display=swap" rel="stylesheet">
    
     <link rel="shortcut icon" sizes="16x16 32x32" href="{{ asset('images/favicons/favicon.ico') }}">
        <link rel="apple-touch-icon" href="{{ asset('images/favicons/apple-touch-icon.png') }}">
        <link rel="icon" sizes="16x16" href="{{ asset('images/favicons/favicon-16x16.png') }}">
        <link rel="icon" sizes="32x32" href="{{ asset('images/favicons/favicon-32x32.png') }}">
        <link rel="icon" sizes="512x512" href="{{ asset('images/favicons/android-chrome-512x512.png') }}">
        <link rel="icon" sizes="512x512" href="{{ asset('images/favicons/android-chrome-192x192.png') }}">
        <link rel="manifest" href="{{ asset('images/favicons/site.webmanifest') }}">
     

      <!-- APP CSS -->
      
    @if(App::environment(['local', 'staging']))
    <link rel="stylesheet" href="{{ asset('css/app.css?v='.rand(1,99)) }}">
    @else
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    @endif

    
    <script src="{{ asset('js/manifest.js') }}" defer></script>
    <script src="{{ asset('js/vendor.js') }}" defer></script>

    @if(App::environment(['local', 'staging']))
    <script src="{{ asset('js/app.js?v='.rand(1,99)) }}" defer></script>
    @else
    <script src="{{ asset('js/app.js') }}" defer></script>
    @endif
    
     @inertiaHead
  </head>
   <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-07RFQQT1VD"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-07RFQQT1VD');
</script>
  <body>
    @inertia
    @if (app()->isLocal())
        <script src="http://localhost:3000/browser-sync/browser-sync-client.js"></script>
    @endif
  </body>
    <script>
       let appDataObj = {
        'resumeLink': '{{env('CV_DOWNLOAD_LINK')}}',
        'appUrl': '{{env('APP_URL')}}',
       }
   
    </script>
</html>