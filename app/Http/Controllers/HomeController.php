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

        $sobre = Texto::where('localizacao',6)
        ->where('ativo',1)
        ->where('excluido',0)
        ->limit(1)
        ->get();

        $valores = Texto::where('localizacao',8)
        ->where('ativo',1)
        ->where('excluido',0)
        ->get();

    	$telefone = Texto::where('localizacao',1)
    	->where('ativo',1)
    	->where('excluido',0)
    	->get();

    	$endereco = Texto::where('localizacao',2)
    	->where('ativo',1)
    	->where('excluido',0)
    	->get();

    	$email = Texto::where('localizacao',3)
    	->where('ativo',1)
    	->where('excluido',0)
    	->get();

    	$redessociais = Texto::where('localizacao',4)
    	->where('ativo',1)
    	->where('excluido',0)
    	->get();

        $empreendimentos = Texto::where('localizacao',5)
        ->where('ativo',1)
        ->where('excluido',0)
        ->where('destaque',1)
        ->get();

        foreach($empreendimentos as $item){

            $item->slug = str_slug($item->titulo,'_');

        }

    	return view('pages.home',[

    		'banner' => $banner,
    		'telefone' => $telefone,
    		'endereco' => $endereco,
    		'email' => $email,
    		'redessociais' => $redessociais,
            'empreendimentos' => $empreendimentos,
            'sobre' => $sobre,
            'valores' => $valores,

    		]);
    }
}
