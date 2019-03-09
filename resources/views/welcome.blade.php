<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Burger</title>
        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body>
        <div id="root"></div>
        
        @php
        $polyfills = [
            'Promise',
            'Object.assign',
            'Object.values',
            'Array.prototype.find',
            'Array.prototype.findIndex',
            'Array.prototype.includes',
            'String.prototype.includes',
            'String.prototype.startsWith',
            'String.prototype.endsWith',
        ];
        @endphp
<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features={{ implode(',', $polyfills) }}"></script>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
    </html>