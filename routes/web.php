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

Route::get('/parceiros', 'OutrosController@parceiros');

Route::get('/fotos', 'OutrosController@fotos');

Route::get('/entregues', 'OutrosController@entregues');

Route::get('/lancamentos', 'OutrosController@lancamentos');

Route::get('/obras-em-andamento', 'OutrosController@obrasemandamento');

Route::get('/pre-lancamento', 'OutrosController@prelancamento');

Route::get('/servicos', 'OutrosController@servicos');

Route::get('/contato', 'ContatoController@contato');

Route::get('/faq', 'ContatoController@faq');

Route::get('/nossa-cidade', 'ContatoController@cidade');
