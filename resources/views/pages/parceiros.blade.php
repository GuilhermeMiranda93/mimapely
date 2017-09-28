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
		<div class="overlay-pattern"></div>
		<div class="container">
			<h2 class="display-3 text-center">Parceiros</h2>
			<ol class="breadcrumb text-center mb-0">
				<li class="breadcrumb-item"><a href="{{url('/')}}">Home</a></li>
				<li class="breadcrumb-item active">Parceiros</li>
			</ol>
		</div>
	</div>

	<section id="patrocinadores">
		<div class="container">
			<div class="row">
				@foreach($empresas as $item)
				<div class="col-12 col-md-3 div-img mb-4">
					<div>
						<img src="{{$item->imagem}}" alt="{{$item->titulo}}">
					</div>
				</div>
				@endforeach
				
			</div>
			
			
		</div>
		
	</section>

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