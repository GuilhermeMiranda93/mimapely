@extends('base')
@section('content')

@component('navbar')
@slot('activeHome')
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

	<div class="jumbotron jumbotron-fluid">
		<div class="container">
			<h2 class="display-3 text-center">{{$titulo}}</h2>
			<ol class="breadcrumb text-center mb-0">
				<li class="breadcrumb-item"><a href="{{url('/')}}">Home</a></li>
				<li class="breadcrumb-item active">{{$titulo}}</li>
			</ol>
		</div>
	</div>
	


	<div class="container">

		<div class="card-columns">

			@foreach($fotos as $item)
			<div class="card">
				<a href="{{URL::asset($item->imagem)}}" data-lightbox="fotos">
					<img src="{{URL::asset($item->imagem)}}" class="img-fluid filter card-img-top" alt="{{$item->titulo}}">
				</a>
				<div class="card-block">
					<h4 class="card-title">{{$item->titulo}}</h4>
					<p class="card-text">{{$item->descricao}}</p>
				</div>
			</div>
			@endforeach

		</div>

	</div>



	


	@component('footer',['telefone' => $telefone,'endereco' => $endereco,'email' => $email,'redessociais' => $redessociais])
	@endcomponent

</div>




@endsection