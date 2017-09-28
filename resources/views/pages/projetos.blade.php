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
	
	<div class="jumbotron jumbotron-fluid" style="background-image: url('../img/jumbotron.jpg')">
		<div class="overlay-pattern"></div>
		<div class="container">
			<h2 class="display-3 text-center">Empreendimentos</h2>
			<ol class="breadcrumb text-center mb-0">
				<li class="breadcrumb-item"><a href="{{url('/')}}">Home</a></li>
				<li class="breadcrumb-item active">Empreendimentos</li>
			</ol>
		</div>
	</div>

	<section class="my-10 residenciais" id="projetos">
		<div class="container">
			<div class="row">

				@foreach($empreendimentos as $item)
				<div class="residencial mb-4 col-12 col-md-4">
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