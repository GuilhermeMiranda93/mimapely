@extends('base')
@section('content')

@component('navbar')
@slot('activeHome')
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
				<img class="d-block img-fluid" src="{{URL::asset($item->imagem)}}" alt="{{$item->titulo}}">
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

	<div class="container my-5">
		<div>
			@foreach($sobre as $item)
			<h2>{{$item->titulo}}</h2>
			<hr>
			{!! $item->texto !!}
			@endforeach
		</div>
	</div>


	<div class="container my-5">

		<div class="row mt-5">
			<div class="col-12">
				<h2>Empreendimentos</h2>
				<hr>
			</div>
		</div>

		
		<div class="row">

			<div class="card-deck">

				@foreach($empreendimentos as $item)
				<div class="card mb-4 px-4">
					<div class="card-img">
						<img class="card-img-top img-fluid" src="{{URL::asset($item->imagem)}}" alt="Card image cap">
					</div>
					
					<div class="card-block">
						<h4 class="card-title">{{$item->titulo}}</h4>
					</div>
					<a href="#" title="">
						<div class="card-footer text-center">
							Saiba Mais
						</div>
					</a>
				</div>
				@endforeach

			</div>

		</div>


	</div>
	@component('footer',['telefone' => $telefone,'endereco' => $endereco,'email' => $email,'redessociais' => $redessociais])
	@endcomponent

</div>




@endsection