@extends('base')
@section('content')

@component('navbar')
@slot('activeHome')
inactive
@endslot
@slot('activeSobre')
inactive
@endslot
@slot('activePortfolio')
active
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
	
	<div class="jumbotron jumbotron-fluid" style="background-image: url({{URL::asset($imagem_residencial)}})">
		<div class="overlay-pattern"></div>
		<div class="container">
			<h2 class="display-3 text-center">{{$nome_residencial}}</h2>
			<ol class="breadcrumb text-center mb-0">
				<li class="breadcrumb-item"><a href="{{url('/')}}">Home</a></li>
				<li class="breadcrumb-item active">Empreendimentos</li>
			</ol>
		</div>
	</div>

	@foreach($residencial as $item)
	{!!$item->texto!!}
	@endforeach

	<section class="galeria-fotos my-5 px-4">
		<h2 class="ml-3 mb-3">Galeria</h2>
		<div class="fotorama px-3" data-nav="thumbs" data-fit="cover" data-width="100%">
			@foreach($galeria as $item)
			<a href="{{URL::asset($item->imagem)}}"><img src="{{URL::asset($item->imagem)}}"></a>
			@endforeach
		</div>
	</section>

	@foreach($residencial as $item)
	<section class="mapa">
		<iframe src='{{$item->url}}' width='100%' height='300' frameborder='0' style='border:0' allowfullscreen></iframe>
	</section>
	@endforeach

	<section class="andamento my-10">
		<div class="container">

			@foreach($residencial as $item)
			<div class="alert alert-warning" role="alert">
				<p class="text-center">Status</p>
				<p class="text-center"><strong>{{$item->descricao}}</strong></p>
			</div>
			@endforeach

		</div>
	</section>

	<div class="sharethis-inline-share-buttons"></div>


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






	@component('footer',['telefone' => $telefone,'endereco' => $endereco,'email' => $email,'redessociais' => $redessociais])
	@endcomponent

</div>




@endsection