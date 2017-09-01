<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Texto;
use App\Galeria;

class OutrosController extends Controller
{
    public function parceiros(){
		$empresas = Texto::where('localizacao',5)
		->where('ativo',1)
		->where('excluido',0)
		->get();

		$imobiliarias = Texto::where('localizacao',4)
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

		return view('pages.parceiros',[
			'imobiliarias' => $imobiliarias,
			'empresas' => $empresas,
			'telefone' => $telefone,
			'endereco' => $endereco,
			'email' => $email,
			'redessociais' => $redessociais
			]);
	}

	public function fotos(){

		$titulo = 'Galeria de Fotos';

		$fotos = Galeria::where('localizacao',1)
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

		return view('pages.fotos',[
			'titulo' => $titulo,
			'fotos' => $fotos,
			'telefone' => $telefone,
			'endereco' => $endereco,
			'email' => $email,
			'redessociais' => $redessociais
			]);
	}

	public function entregues(){

		$titulo = 'Entregas';

		$fotos = Galeria::where('localizacao',2)
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

		return view('pages.fotos',[
			'titulo' => $titulo,
			'fotos' => $fotos,
			'telefone' => $telefone,
			'endereco' => $endereco,
			'email' => $email,
			'redessociais' => $redessociais
			]);
	}


	public function lancamentos(){

		$titulo = 'Lançamentos';

		$fotos = Galeria::where('localizacao',3)
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

		return view('pages.fotos',[
			'titulo' => $titulo,
			'fotos' => $fotos,
			'telefone' => $telefone,
			'endereco' => $endereco,
			'email' => $email,
			'redessociais' => $redessociais
			]);
	}

	public function obrasemandamento(){

		$titulo = 'Obras em Andamento';

		$fotos = Galeria::where('localizacao',4)
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

		return view('pages.fotos',[
			'titulo' => $titulo,
			'fotos' => $fotos,
			'telefone' => $telefone,
			'endereco' => $endereco,
			'email' => $email,
			'redessociais' => $redessociais
			]);
	}

	public function prelancamento(){

		$titulo = 'Pré-Lançamento';

		$fotos = Galeria::where('localizacao',5)
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

		return view('pages.fotos',[
			'titulo' => $titulo,
			'fotos' => $fotos,
			'telefone' => $telefone,
			'endereco' => $endereco,
			'email' => $email,
			'redessociais' => $redessociais
			]);
	}

	public function servicos(){

		$projetos = Texto::where('localizacao',15)
		->where('ativo',1)
		->where('excluido',0)
		->get();

		$construcoes = Texto::where('localizacao',17)
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

		return view('pages.projetos',[
			'projetos' => $projetos,
			'construcoes' => $construcoes,
			'telefone' => $telefone,
			'endereco' => $endereco,
			'email' => $email,
			'redessociais' => $redessociais
			]);
	}
}



























