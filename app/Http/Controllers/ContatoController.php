<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Texto;

class ContatoController extends Controller
{
     public function contato(){

     	$empreendimentos = Texto::where('localizacao',5)
		->where('destaque',1)
		->where('ativo',1)
		->where('excluido',0)
		->get();

		foreach($empreendimentos as $item){

			$item->slug = str_slug($item->titulo,'_');

		}

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

		return view('pages.contato',[

			'telefone' => $telefone,
			'endereco' => $endereco,
			'email' => $email,
			'redessociais' => $redessociais,
			'empreendimentos' => $empreendimentos
			]);
	}
}
