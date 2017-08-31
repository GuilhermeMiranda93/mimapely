@extends('base')
@section('content')

@component('navbar')
@slot('activeHome')
inactive
@endslot
@slot('activeSobre')
inactive
@endslot
@slot('activeInformacoes')
active
@endslot
@slot('activeContato')
inactive
@endslot
@slot('activeSatisfacao')
inactive
@endslot
@endcomponent

<div class="corpo-site">
	


	<div class="container">

		<div class="row mt-5">
			<div class="col-12">
			@foreach($descricao as $item)
				<h2>{{$item->titulo}}</h2>
				<hr>
				<p>{{$item->texto}}</p>
				@endforeach
			</div>
		</div>

		<div class="row mt-5">

		@foreach($tabelas as $item)
			<div class="col-12 col-md-6">
				<h2>{{$item->titulo}}</h2>

				{!!$item->texto!!}
			</div>

			@endforeach

		</div>

		<div class="row mt-5">
			<a href="{{url('/reservas')}}"><img src="{{URL::asset('img/cta.png')}}" alt="" class="img-fluid"></a>
		</div>

		<div class="row mt-5">

			<div class="col-12">
			@foreach($promocoes as $item)
				<h2>{{$item->titulo}}</h2>
				<hr>
				{!! $item->texto !!}
				@endforeach
			</div>

		</div>

		<div class="row mt-5 mb-5">

			<div class="col-12">
			@foreach($beneficios as $item)
				<h2>{{$item->titulo}}</h2>
				<hr>
				{!! $item->texto !!}
				@endforeach
			</div>

		</div>

		



	</div>




	@component('footer',['telefone' => $telefone,'endereco' => $endereco,'email' => $email,'redessociais' => $redessociais])
	@endcomponent

</div>




@endsection