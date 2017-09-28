@extends('base')
@section('content')

@component('navbar')
@slot('activeHome')
active
@endslot
@slot('activeSobre')
inactive
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



	<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
		<ol class="carousel-indicators">
			@foreach($banner as $item)
			@if($loop->index == 0)
			<li data-target="#carouselExampleIndicators" data-slide-to="{{$loop->index}}" class="active"></li>
			@else
			<li data-target="#carouselExampleIndicators" data-slide-to="{{$loop->index}}"></li>
			@endif
			@endforeach
		</ol>
		<div class="carousel-inner" role="listbox">
			@foreach($banner as $item)
			@if($loop->index == 0)
			<div class="carousel-item active">
				<img class="d-block filter" src="{{URL::asset($item->imagem)}}" alt="{{$item->titulo}}">
				<div class="overlay-pattern"></div>
				<div class="carousel-caption">
					<h2>{{$item->titulo}}</h2>
					<h2>
						<span>{{$item->descricao}}</span>
					</h2>
					<p>{{$item->url}}</p>
				</div>
			</div>
			@else
			<div class="carousel-item">
				<img class="d-block filter" src="{{URL::asset($item->imagem)}}" alt="{{$item->titulo}}">
				<div class="overlay-pattern"></div>
				<div class="carousel-caption">
					<h2>{{$item->titulo}}</h2>
					<h2>
						<span>{{$item->descricao}}</span>
					</h2>
					<p>{{$item->url}}</p>
				</div>
			</div>
			@endif
			@endforeach
			
		</div>
		<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="sr-only">Previous</span>
		</a>
		<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="sr-only">Next</span>
		</a>
	</div>

	<section class="container my-7 icons">
		<div class="row">

			@foreach($valores as $item)
			<div class="col-12 col-md-3 p-2 d-flex justify-content-start align-items-center flex-column mb-4">
				<div class="icon-img">
					<div>
						<i class="{{$item->imagem}}"></i>
					</div>
					
				</div>
				<h3 class="my-2"><strong>{{$item->titulo}}</strong></h3>
			</div>
			@endforeach

		</div>
	</section>

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

	<section class="my-10 residenciais">
		<div class="container">
			<div class="owl-carousel owl-theme">



				@foreach($empreendimentos as $item)
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

	<section class="my-10 form-contato" id="contato">

		<div class="border">
			<div class="border-1">
				<div class="border-2">
					<div class="container">
						<div class="row">
							<div class="col-12 col-md-6 texto-form mb-4">
								<h2 class="mb-3">Fale conosco</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet ligula congue, molestie leo eu, dictum felis. Duis pulvinar sagittis aliquam. Donec scelerisque tortor quis elit sodales, non gravida dolor venenatis. Vestibulum convallis mi et lorem maximus, in convallis urna laoreet. Curabitur vestibulum pulvinar urna et gravida. Aliquam pellentesque aliquam pulvinar. Vestibulum vitae velit eu nisi eleifend lobortis. Mauris sodales mauris a congue eleifend.</p>
							</div>
							<div class="col-12 col-md-6 mb-4">
								<form id="form-contato">
									<div class="form-group mb-4">
										<label id="nome_input" for="nome">Nome</label>
										<input type="email" class="form-control" name="nome_input" id="nome" required>
									</div>
									<div class="form-group mb-4">
										<label id="telefone_input" for="telefone">Telefone</label>
										<input type="email" class="form-control" name="telefone_input" id="telefone" required>
									</div>
									<div class="form-group mb-4">
										<label id="email_input" for="email">Email</label>
										<input type="email" class="form-control" name="email_input" id="email" required>
									</div>
									<div class="form-group form-group-text mb-4">
										<label id="text_input" for="mensagem">Mensagem</label>
										<textarea class="form-control" id="mensagem" name="text_input" rows="3" required></textarea>
									</div>
									<button type="submit" class="btn btn-primary button-form"><i class="fa fa-send"></i> | Enviar</button>
								</form>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>

		<div class="overlay"></div>

		
		
	</section>





	@component('footer',['telefone' => $telefone,'endereco' => $endereco,'email' => $email,'redessociais' => $redessociais])
	@endcomponent

</div>




@endsection