<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Texto;

class ContatoController extends Controller
{
     public function contato(){

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

		return view('pages.contato',[

			'telefone' => $telefone,
			'endereco' => $endereco,
			'email' => $email,
			'redessociais' => $redessociais
			]);
	}

	 public function localizacao(){

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

		return view('pages.localizacao',[

			'telefone' => $telefone,
			'endereco' => $endereco,
			'email' => $email,
			'redessociais' => $redessociais
			]);
	}

	 public function cidade(){

	 	$descricao = Texto::where('localizacao',17)
		->where('ativo',1)
		->where('excluido',0)
		->limit(1)
		->get();

		$cidade = Texto::where('localizacao',16)
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

		return view('pages.cidade',[

			'descricao' => $descricao,
			'cidade' => $cidade,
			'telefone' => $telefone,
			'endereco' => $endereco,
			'email' => $email,
			'redessociais' => $redessociais
			]);
	}
}
