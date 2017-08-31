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
inactive
@endslot
@slot('activeContato')
active
@endslot
@slot('activeSatisfacao')
inactive
@endslot
@endcomponent

<div class="corpo-site">
	


	<div class="container">

		<div class="row m-5">
			<div class="col-12">
				@foreach($descricao as $item)
				<h2>{{$item->titulo}}</h2>
				<hr>
				{{$item->descricao}}
				@endforeach
			</div>
		</div>

		@foreach($cidade as $item)
		<div class="row m-5">
			
			<div class="col-12 col-sm-4 foto-cidade">
				<img src="{{URL::asset($item->imagem)}}" class="img-fluid filter" alt="{{$item->titulo}}">
			</div>			
			<div class="col-12 col-sm-8">
				<h3><strong>{{$item->titulo}}</strong></h3>
				{!! $item->texto !!}
			</div>
			
		</div>
		@endforeach




	</div>




	@component('footer',['telefone' => $telefone,'endereco' => $endereco,'email' => $email,'redessociais' => $redessociais])
	@endcomponent

</div>




@endsection