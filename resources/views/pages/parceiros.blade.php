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
inactive
@endslot
@slot('activeParceiros')
active
@endslot
@slot('activeContato')
inactive
@endslot
@endcomponent

<div class="corpo-site">
	
	<div class="jumbotron jumbotron-fluid">
		<div class="container">
			<h2 class="display-3 text-center">Parceiros</h2>
			<ol class="breadcrumb text-center mb-0">
				<li class="breadcrumb-item"><a href="{{url('/')}}">Home</a></li>
				<li class="breadcrumb-item active">Parceiros</li>
			</ol>
		</div>
	</div>


	<div class="container">

		<div class="row my-5">
			<div class="col-12">
				<h2>Empresas Parceiras</h2>
				<hr>

				<div class="row">

					@foreach($empresas as $item)

					<div class="col-6 col-sm-3 col-md-3">
						<img src="{{url::asset($item->imagem)}}" class="img-fluid" alt="{{$item->titulo}}">
					</div>

					@endforeach


				</div>
				
			</div>
		</div>

		<div class="row my-5">
			<div class="col-12">
				<h2>Imobiliárias Parceiras</h2>
				<hr>

				<div class="row">

					@foreach($imobiliarias as $item)

					<div class="col-6 col-sm-3 col-md-3">
						<img src="{{url::asset($item->imagem)}}" class="img-fluid" alt="{{$item->titulo}}">
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