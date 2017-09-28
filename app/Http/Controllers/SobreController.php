<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Texto;
use App\Galeria;

class SobreController extends Controller
{
	public function sobre(){
		$sobre = Texto::where('localizacao',6)
		->where('ativo',1)
		->where('excluido',0)
		->limit(1)
		->get();

		$residenciais = Texto::where('localizacao',5)
		->where('destaque',1)
		->where('ativo',1)
		->where('excluido',0)
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

		return view('pages.sobre',[

			'sobre' => $sobre,
			'telefone' => $telefone,
			'endereco' => $endereco,
			'email' => $email,
			'redessociais' => $redessociais,
			'valores' => $valores,
			'residenciais' => $residenciais
			]);
	}
}
