@extends('base')
@section('content')

@component('navbar')
@slot('activeHome')
active
@endslot
@slot('activeSobre')
inactive
@endslot
@slot('activeInformacoes')
inactive
@endslot
@slot('activeContato')
inactive
@endslot
@slot('activeSatisfacao')
inactive
@endslot
@endcomponent

<div class="corpo-site">
	


	<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
		<ol class="carousel-indicators">
			@foreach($banner as $item)

			@if($loop->first)
			<li data-target="#carouselExampleIndicators" data-slide-to="{{$loop->index}}" class="active"></li>
			@else
			<li data-target="#carouselExampleIndicators" data-slide-to="{{$loop->index}}"></li>
			@endif

			@endforeach
		</ol>
		<div class="carousel-inner" role="listbox">

			@foreach($banner as $item)

			@if($loop->first)
			<div class="carousel-item active">
				<img class="d-block img-fluid" src="{{URL::asset($item->imagem)}}" alt="{{$item->titulo}}">
			</div>
			@else
			<div class="carousel-item">
				<img class="d-block img-fluid" src="{{URL::asset($item->imagem)}}" alt="First slide">
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


	<div class="container mt-5 mb-5">
		
		<div class="row">


			<div class="card-deck">
				<div class="card mb-4 px-4">
					<div class="card-img">
						<img class="card-img-top img-fluid" src="{{URL::asset('img/reserva.jpg')}}" alt="Card image cap">
					</div>
					
					<div class="card-block">
						<h4 class="card-title">Faça sua reserva</h4>
						<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					</div>
					<a href="#" title="">
						<div class="card-footer text-center">
							Saiba Mais
						</div>
					</a>
				</div>
				<div class="card mb-4 px-4">
					<div class="card-img">
						<img class="card-img-top img-fluid" src="{{URL::asset('img/quarto.jpg')}}" alt="Card image cap">
					</div>
					<div class="card-block">
						<h4 class="card-title">Apartamentos</h4>
						<p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
					</div>
					<a href="#" title="">
						<div class="card-footer text-center">
							Saiba Mais
						</div>
					</a>
				</div>
				<div class="card mb-4 px-4">
					<div class="card-img">
						<img class="card-img-top img-fluid" src="{{URL::asset('img/promocoes.jpg')}}" alt="Card image cap">
					</div>
					<div class="card-block">
						<h4 class="card-title">Nossas promoções</h4>
						<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
					</div>
					<a href="#" title="">
						<div class="card-footer text-center">
							Saiba Mais
						</div>
					</a>
				</div>
			</div>

		</div>


	</div>
	@component('footer',['telefone' => $telefone,'endereco' => $endereco,'email' => $email,'redessociais' => $redessociais])
	@endcomponent

</div>




@endsection