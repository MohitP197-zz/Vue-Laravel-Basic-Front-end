<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome', [
        'title' => "Vue.js Frontend With Laravel 5.8"
    ]);
});

Route::get('/page', function () {
    return view('Page',
        [
            'title' => "Page 2 - About the developer",
            'developer' => json_encode([
                    "name" => "Mohit Paudel",
                    "role" => "Web-developer",
                    "code" => "Keep coding!!"
            ])
        ]
    );
});

Route::get('/{any}', function(){
    return view('index');
})->where('any', '.*');