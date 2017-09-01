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
inactive
@endslot
@slot('activeContato')
active
@endslot
@endcomponent

<div class="corpo-site">
	
	<div class="jumbotron jumbotron-fluid">
		<div class="container">
			<h2 class="display-3 text-center">FAQ - Tire suas dúvidas</h2>
			<ol class="breadcrumb text-center mb-0">
				<li class="breadcrumb-item"><a href="{{url('/')}}">Home</a></li>
				<li class="breadcrumb-item active">FAQ - Tire suas dúvidas</li>
			</ol>
		</div>
	</div>

	<div class="container">

		<div class="row mt-5">
			<div class="col-12">
				<h2>FAQ - Tire as suas dúvidas</h2>
				<hr>
			</div>
		</div>

		<div class="row mt-3 mb-5">

			<div id="accordion" class="col-12" role="tablist" aria-multiselectable="true">
				<ul class="list-group">

					@foreach($perguntas as $item)
					<a class="faq-link" data-toggle="collapse" data-parent="#accordion" href="{{'#collapse'.$loop->iteration}}" aria-expanded="true" aria-controls="{{'collapse'.$loop->iteration}}">
						<li class="list-group-item justify-content-between">
							{{$item->titulo}}
							<span class="badge badge-default badge-pill"><i class="fa fa-caret-down"></i></span>
						</li>
					</a>

					<div id="{{'collapse'.$loop->iteration}}" class="collapse" role="tabpanel" aria-labelledby="{{'heading'.$loop->iteration}}">
						<div class="card-block">
							{!! $item->texto !!}
						</div>
					</div>
					@endforeach


				</ul>

			</div>


		</div>

	</div>


	@component('footer',['telefone' => $telefone,'endereco' => $endereco,'email' => $email,'redessociais' => $redessociais])
	@endcomponent

</div>




@endsection