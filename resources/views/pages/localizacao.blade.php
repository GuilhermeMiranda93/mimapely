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
				<h2>Nossa localização</h2>
				<hr>
				<p>Nos encontre de maneira rápida e prática, veja no mapa qual rota é mais viável.</p>
			</div>
		</div>

		<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29771.194584054134!2d-47.973401!3d-21.136501!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf7112b148a00b056!2sHotel+Belo+Horizonte!5e0!3m2!1spt-BR!2sbr!4v1504097202723" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen class="mb-5 mt-2"></iframe>

	</div>

	


	@component('footer',['telefone' => $telefone,'endereco' => $endereco,'email' => $email,'redessociais' => $redessociais])
	@endcomponent

</div>




@endsection