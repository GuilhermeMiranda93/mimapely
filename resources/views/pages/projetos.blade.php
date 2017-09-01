@extends('base')
@section('content')

@component('navbar')
@slot('activeHome')
inactive
@endslot
@slot('activePortfolio')
inactive
@endslot
@slot('activeServicos')
active
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
			<h2 class="display-3 text-center">Serviços</h2>
			<ol class="breadcrumb text-center mb-0">
				<li class="breadcrumb-item"><a href="{{url('/')}}">Home</a></li>
				<li class="breadcrumb-item active">Serviços</li>
			</ol>
		</div>
	</div>
	


	<div class="container">

		<div class="row my-5">
			<div class="col-12">
				<h2>Projetos</h2>
				<hr>

				<div class="row">

					@foreach($projetos as $item)

					<div class="col-6 col-sm-3 col-md-3">
						<img src="{{url::asset($item->imagem)}}" class="img-fluid" alt="{{$item->titulo}}">
						<p>{!! $item->texto !!}</p>
					</div>

					@endforeach


				</div>
				
			</div>
		</div>

		<div class="row my-5">
			<div class="col-12">
				<h2>Construção e Administração</h2>
				<hr>

				<div class="row">

					@foreach($construcoes as $item)

					<div class="col-6 col-sm-3 col-md-3">
						<img src="{{url::asset($item->imagem)}}" class="img-fluid" alt="{{$item->titulo}}">
						<p>{!! $item->texto !!}</p>
					</div>

					@endforeach


				</div>
				
			</div>
		</div>

	</div>



	


	@component('footer',['telefone' => $telefone,'endereco' => $endereco,'email' => $email,'redessociais' => $redessociais])
	@endcomponent

</div>




@endsection