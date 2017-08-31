<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Texto;
use App\Banner;

class HomeController extends Controller
{
    public function home(){
    	$banner = Banner::where('ativo',1)
    	->where('excluido',0)
    	->get();

    	$telefone = Texto::where('localizacao',7)
    	->where('ativo',1)
    	->where('excluido',0)
    	->get();

    	$endereco = Texto::where('localizacao',11)
    	->where('ativo',1)
    	->where('excluido',0)
    	->get();

    	$email = Texto::where('localizacao',12)
    	->where('ativo',1)
    	->where('excluido',0)
    	->get();

    	$redessociais = Texto::where('localizacao',13)
    	->where('ativo',1)
    	->where('excluido',0)
    	->get();

    	return view('pages.home',[

    		'banner' => $banner,
    		'telefone' => $telefone,
    		'endereco' => $endereco,
    		'email' => $email,
    		'redessociais' => $redessociais

    		]);
    }
}
