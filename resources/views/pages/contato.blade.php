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

		<div class="row mt-5">
			<div class="col-12">
				<h2>Fale conosco</h2>
				<hr>
			</div>
		</div>

		<form class="mb-5 mt-2">

			<div class="form-group">
				<label for="exampleSelect1">Assunto</label>
				<select class="form-control" id="exampleSelect1">
					<option>Gerência</option>
					<option>Administração</option>
				</select>
			</div>

			<div class="form-group">
				<label for="nome">Nome</label>
				<input type="email" class="form-control" id="nome" aria-describedby="nomeHelp" placeholder="Coloque seu nome">
			</div>

			<div class="form-group">
				<label for="email">Email</label>
				<input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Coloque seu email">
			</div>

			<div class="form-group">
				<label for="telefone">Telefone</label>
				<input type="number" class="form-control" id="telefone" aria-describedby="telefoneHelp" placeholder="Coloque seu telefone">
			</div>

			<div class="form-group">
				<label for="mensagem">Mensagem</label>
				<textarea class="form-control" id="mensagem" rows="3"></textarea>
			</div>

			<button type="submit" class="btn btn-primary btn-custom">Enviar</button>
		</form>
	</div>

	


	@component('footer',['telefone' => $telefone,'endereco' => $endereco,'email' => $email,'redessociais' => $redessociais])
	@endcomponent

</div>




@endsection