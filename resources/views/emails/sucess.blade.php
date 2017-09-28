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
inactive
@endslot
@slot('activeContato')
active
@endslot
@endcomponent

<div class="corpo-site">

	<div class="jumbotron jumbotron-fluid" style="background-image: url('../img/jumbotron.jpg')">
		<div class="overlay-pattern"></div>
		<div class="container">
			<h2 class="display-3 text-center">Contato</h2>
			<ol class="breadcrumb text-center mb-0">
				<li class="breadcrumb-item"><a href="{{url('/')}}">Home</a></li>
				<li class="breadcrumb-item active">Contato</li>
			</ol>
		</div>
	</div>

</div>

<div class="container">

	<div class="row m-4">
		
		<div class="alert alert-success" role="alert">
			<strong>Obrigado por entrar em contato!</strong> Responderemos o mais breve possível.
		</div>

	</div>

</div>

@component('footer',['telefone' => $telefone, 'email' => $email, 'endereco' => $endereco, 'redessociais' => $redessociais])
@endcomponent

@endsection