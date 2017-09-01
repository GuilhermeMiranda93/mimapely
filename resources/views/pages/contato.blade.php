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
			<h2 class="display-3 text-center">Fale Conosco</h2>
			<ol class="breadcrumb text-center mb-0">
				<li class="breadcrumb-item"><a href="{{url('/')}}">Home</a></li>
				<li class="breadcrumb-item active">Fale Conosco</li>
			</ol>
		</div>
	</div>


	<div class="container">

		<div class="row mt-5">
			<div class="col-12">
				<h2>Fale conosco</h2>
				<hr>
			</div>
		</div>

		<div class="row mt-3 mb-5">

			<div class="col-12 col-md-6">
				<form>

					<div class="form-group">
						<label for="nome">Nome</label>
						<input type="text" class="form-control" id="nome" aria-describedby="nomeHelp" placeholder="Coloque seu nome" required>
					</div>

					<div class="form-group">
						<label for="email">Email</label>
						<input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Coloque seu email" required>
					</div>

					<div class="form-group">
						<label for="telefone">Telefone</label>
						<input type="number" class="form-control" id="telefone" aria-describedby="telefoneHelp" placeholder="Coloque seu telefone" required>
					</div>

					<div class="form-group">
						<label for="assunto">Assunto</label>
						<input type="text" class="form-control" id="assunto" aria-describedby="assuntoHelp" placeholder="Escreva um assunto" required>
					</div>

					<div class="form-group">
						<label for="mensagem">Mensagem</label>
						<textarea class="form-control" id="mensagem" rows="3"></textarea>
					</div>

					<button type="submit" class="btn btn-primary btn-custom">Enviar</button>
				</form>
			</div>

			<div class="col-12 col-md-6">
				<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7409.385721358978!2d-46.56847!3d-21.792145!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c9dce9ee81e4af%3A0xdd1b016200fc0c24!2sR.+Rio+Grande+do+Norte%2C+97+-+Centro%2C+Po%C3%A7os+de+Caldas+-+MG%2C+37701-040%2C+Brasil!5e0!3m2!1spt-BR!2sbr!4v1504204158618" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
			</div>
			
		</div>

		
	</div>

	


	@component('footer',['telefone' => $telefone,'endereco' => $endereco,'email' => $email,'redessociais' => $redessociais])
	@endcomponent

</div>




@endsection