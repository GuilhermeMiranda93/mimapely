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

Route::get('/', 'HomeController@home');

Route::get('/o-hotel', 'SobreController@hotel');

Route::get('/apartamento', 'SobreController@apartamento');

Route::get('/cafe-da-manha', 'SobreController@cafedamanha');

Route::get('/precos', 'OutrosController@preco');

Route::get('/reservas', 'OutrosController@reserva');

Route::get('/contato', 'ContatoController@contato');

Route::get('/localizacao', 'ContatoController@localizacao');

Route::get('/nossa-cidade', 'ContatoController@cidade');
