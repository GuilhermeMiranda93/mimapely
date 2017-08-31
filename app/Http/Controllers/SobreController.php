<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Texto;
use App\Galeria;

class SobreController extends Controller
{
	public function hotel(){
		$hotel = Texto::where('localizacao',1)
		->where('ativo',1)
		->where('excluido',0)
		->limit(1)
		->get();

		$informacoes = Texto::where('localizacao',15)
		->where('ativo',1)
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

		return view('pages.sobre',[

			'hotel' => $hotel,
			'telefone' => $telefone,
			'endereco' => $endereco,
			'email' => $email,
			'redessociais' => $redessociais,
			'informacoes' => $informacoes
			]);
	}

	public function apartamento(){
		$hotel = Texto::where('localizacao',3)
		->where('ativo',1)
		->where('excluido',0)
		->limit(1)
		->get();

		$oferecimentos = Texto::where('localizacao',14)
		->where('ativo',1)
		->where('excluido',0)
		->get();

		$informacoes = Texto::where('localizacao',15)
		->where('ativo',1)
		->where('excluido',0)
		->get();

		$galeria = Galeria::where('localizacao',1)
		->where('ativo',1)
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

		return view('pages.sobre2',[

			'hotel' => $hotel,
			'telefone' => $telefone,
			'endereco' => $endereco,
			'email' => $email,
			'redessociais' => $redessociais,
			'galeria' => $galeria,
			'informacoes' => $informacoes,
			'oferecimentos' => $oferecimentos
			]);
	}

	public function cafedamanha(){
		$hotel = Texto::where('localizacao',4)
		->where('ativo',1)
		->where('excluido',0)
		->limit(1)
		->get();

		$galeria = Galeria::where('localizacao',2)
		->where('ativo',1)
		->where('excluido',0)
		->get();

		$informacoes = Texto::where('localizacao',15)
		->where('ativo',1)
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

		return view('pages.sobre3',[

			'hotel' => $hotel,
			'telefone' => $telefone,
			'endereco' => $endereco,
			'email' => $email,
			'redessociais' => $redessociais,
			'galeria' => $galeria,
			'informacoes' => $informacoes
			]);
	}
}
