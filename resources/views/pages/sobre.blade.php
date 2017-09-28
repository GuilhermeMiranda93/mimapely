@extends('base')
@section('content')

@component('navbar')
@slot('activeHome')
inactive
@endslot
@slot('activeSobre')
active
@endslot
@slot('activePortfolio')
inactive
@endslot
@slot('activeServicos')
inactive
@endslot
@slot('activeParceiros')
inactive
@endslot
@slot('activeContato')
inactive
@endslot
@endcomponent

<div class="corpo-site">

	<div class="jumbotron jumbotron-fluid">
		<div class="overlay-pattern"></div>
		<div class="container">
			<h2 class="display-3 text-center">Sobre</h2>
			<ol class="breadcrumb text-center mb-0">
				<li class="breadcrumb-item"><a href="{{url('/')}}">Home</a></li>
				<li class="breadcrumb-item active">Sobre</li>
			</ol>
		</div>
	</div>

	<section id="sobre" class="my-10">
		<div class="container my-10">
			<div class="row">
				@foreach($sobre as $item)
				<div class="col-12 col-md-3 content text-center">
					<img src="{{URL::asset($item->imagem)}}" class="img-fluid mb-4" alt="">
				</div>
				<div class="col-md-1 divider-line d-flex justify-content-center align-items-center">
					<div></div>
				</div>
				<div class="col-12 col-md-6">
					<h2>{{$item->titulo}}</h2>
					<p>{!!$item->texto!!}</p>
				</div>
				@endforeach
			</div>
		</div>

		<section class="my-10 slogan">
			<div class="container">
				<div class="row">
					<div class="col-12 col-md-5 mb-4">
						<img src="{{URL::asset('img/logo_branco.png')}}" class="img-fluid" alt="">
					</div>
					<div class="col-md-2 line-vertical"><div></div></div>
					<div class="col-12 col-md-5 mb-4">
						<p>Você pode sonhar com uma casa grande, uma pequena, com churrasqueira, aquela cozinha americana, com dois quartos, três quartos, varanda... Não importa, a gente realiza!</p>
					</div>


				</div>
			</div>
		</section>

		<div class="container my-10">
			<div class="row">
				
				<div class="col-12 col-md-6">
					<h2>Nossas Qualificações</h2>
					<ul>
						@foreach($valores as $item)
						<li class="mb-2"><span class="mr-4">0{{$loop->iteration}}. </span> {{$item->descricao}}</li><br>
						@endforeach
					</ul>
				</div>
				<div class="col-12 col-md-6 content">
					<img src="{{URL::asset('img/banner3.png')}}" class="img-fluid" alt="">
				</div>
			</div>
		</div>
	</section>


	<section class="my-10 residenciais">
		<div class="container">
			<div class="owl-carousel owl-theme">



				@foreach($residenciais as $item)
				<div class="residencial mb-4">
					<a href="{{url('projetos/'.$item->id_texto.'/'.$item->slug)}}">
						<img src="{{URL::asset($item->imagem)}}" class="img-fluid" alt="{{$item->titulo}}">
						<div class="overlay-div">
							<div class="overlay"></div>
						</div>
						<div class="content">
							<div class="border">
								<div class="texto-residencial">
									<h2 class="text-center">{{$item->titulo}}</h2>
									<small>{{$item->descricao}}</small>
								</div>
							</div>
						</div>
					</a>
				</div>
				@endforeach



			</div>
		</div>
	</section>








	





	@component('footer',['telefone' => $telefone,'endereco' => $endereco,'email' => $email,'redessociais' => $redessociais])
	@endcomponent

</div>




@endsection