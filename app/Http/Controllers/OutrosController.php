<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Texto;

class OutrosController extends Controller
{
    public function preco(){
		$descricao = Texto::where('localizacao',8)
		->where('ativo',1)
		->where('excluido',0)
		->limit(1)
		->get();

		$promocoes = Texto::where('localizacao',9)
		->where('ativo',1)
		->where('excluido',0)
		->limit(1)
		->get();

		$beneficios = Texto::where('localizacao',10)
		->where('ativo',1)
		->where('excluido',0)
		->limit(1)
		->get();

		$tabelas = Texto::where('localizacao',5)
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

		return view('pages.precos',[

			'descricao' => $descricao,
			'tabelas' => $tabelas,
			'promocoes' => $promocoes,
			'beneficios' => $beneficios,
			'telefone' => $telefone,
			'endereco' => $endereco,
			'email' => $email,
			'redessociais' => $redessociais
			]);
	}

	public function reserva(){
		$descricao = Texto::where('localizacao',8)
		->where('ativo',1)
		->where('excluido',0)
		->limit(1)
		->get();

		$promocoes = Texto::where('localizacao',9)
		->where('ativo',1)
		->where('excluido',0)
		->limit(1)
		->get();

		$beneficios = Texto::where('localizacao',10)
		->where('ativo',1)
		->where('excluido',0)
		->limit(1)
		->get();

		$tabelas = Texto::where('localizacao',5)
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

		return view('pages.reserva',[

			'descricao' => $descricao,
			'tabelas' => $tabelas,
			'promocoes' => $promocoes,
			'beneficios' => $beneficios,
			'telefone' => $telefone,
			'endereco' => $endereco,
			'email' => $email,
			'redessociais' => $redessociais
			]);
	}
}
