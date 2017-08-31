@extends('base')
@section('content')

@component('navbar')
@slot('activeHome')
inactive
@endslot
@slot('activeSobre')
active
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


	<div class="container mt-5 mb-5">
		
		<div class="row">

			@foreach($hotel as $item)
			<div class="col-12 col-md-6 img-sobre">
				<img src="{{URL::asset($item->imagem)}}" class="img-fluid filter" alt="{{$item->titulo}}">
			</div>

			<div class="col-12 col-md-6 text-justify">
				<h2>{{$item->titulo}}</h2>
				<hr>
				{!! $item->texto !!}
			</div>

			@endforeach

		</div>

		<div class="row mt-5 mb-5 justify-content-center">

			<div class="col-12">
				<h2>Oferecemos</h2>
				<hr>
			</div>
			
			@foreach($oferecimentos as $item)
			<div class="col-12 col-sm-3 col-md-2 icones-oferecemos my-2">
				<i class="fa {{$item->imagem}} fa-4x"></i>
				<span class="mt-4">{{$item->titulo}}</span>
			</div>
			@endforeach

		</div>

		<div class="row mt-5 mb-5 justify-content-center">

			<div class="col-12">
				<h2>Informações importantes</h2>
				<hr>
			</div>
		

			@foreach($informacoes as $item)
			<div class="col-12 col-sm-5 col-md-5 icones-oferecemos my-2">
				<i class="fa {{$item->imagem}} fa-4x"></i>
				<span class="mt-4">{{$item->titulo}}</span>
			</div>
			@endforeach

		</div>

		<div class="row mt-5 mb-5 justify-content-center">

			<div class="col-12">
				<h2>Galeria</h2>
				<hr>
			</div>
		
			@foreach($galeria as $foto)

			<div class="col-12 col-sm-4 col-md-2 my-2">
				<a href="{{URL::asset($foto->imagem)}}" data-lightbox="apartamentos"><img src="{{URL::asset($foto->imagem)}}" class="img-fluid filter" alt="{{URL::asset($foto->titulo)}}"></a>
			</div>

			@endforeach


		</div>


	</div>
	@component('footer',['telefone' => $telefone,'endereco' => $endereco,'email' => $email,'redessociais' => $redessociais])
	@endcomponent

</div>




@endsection