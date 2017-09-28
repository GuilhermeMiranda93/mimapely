<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Texto;
use App\Galeria;

class OutrosController extends Controller
{
	public function parceiros(){
		$empresas = Texto::where('localizacao',7)
		->where('ativo',1)
		->where('excluido',0)
		->get();

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

		return view('pages.parceiros',[
			'empresas' => $empresas,
			'telefone' => $telefone,
			'endereco' => $endereco,
			'email' => $email,
			'redessociais' => $redessociais,
			'empreendimentos' => $empreendimentos
		]);
	}

	public function projetos(){

		$titulo = 'Empreendimentos';

		$empreendimentos = Texto::where('localizacao',5)
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

		return view('pages.projetos',[
			'titulo' => $titulo,
			'empreendimentos' => $empreendimentos,
			'telefone' => $telefone,
			'endereco' => $endereco,
			'email' => $email,
			'redessociais' => $redessociais
		]);
	}

	public function residencial($id,$nome_projeto){

		$titulo = 'Empreendimentos';

		$nome_residencial = '';
		$imagem_residencial = '';
		$id_galeria = '';

		$residencial = Texto::where('id_texto',$id)
		->where('ativo',1)
		->where('excluido',0)
		->get();

		foreach($residencial as $item){
			$nome_residencial = $item->titulo;
			$imagem_residencial = $item->imagem;
			$id_galeria = $item->galeria;
		}

		$galeria = Galeria::where('localizacao',$id_galeria)
		->where('ativo',1)
		->where('excluido',0)
		->get();

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

		return view('pages.projetodetalhe',[
			'empreendimentos' => $empreendimentos,
			'residencial' => $residencial,
			'titulo' => $titulo,
			'telefone' => $telefone,
			'endereco' => $endereco,
			'email' => $email,
			'redessociais' => $redessociais,
			'nome_residencial' => $nome_residencial,
			'imagem_residencial' => $imagem_residencial,
			'galeria' => $galeria
		]);
	}
}



























