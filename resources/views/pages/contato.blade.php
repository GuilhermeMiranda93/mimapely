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

	<section class="form-contato" id="contato">

		<div class="border">
			<div class="border-1">
				<div class="border-2">
					<div class="container">
						<div class="row">
							<div class="col-12 col-md-6 texto-form mb-4">
								<h2 class="mb-3">Fale conosco</h2>
								<p>Diante de qualquer questão que surgir, estaremos disponíveis para esclarecer. Sinta-se à vontade para falar com a gente. Sua opinião e interação é essencial para nos ajudar a realizar sonhos cada vez maiores!</p>
							</div>
							<div class="col-12 col-md-6 mb-4">
								<form id="form-contato" method="POST" action="/sendmail">
									{{ csrf_field() }}
									<div class="form-group mb-4">
										<label id="nome_input" for="nome">Nome</label>
										<input type="text" class="form-control" name="nome_input" id="nome" required>
									</div>
									<div class="form-group mb-4">
										<label id="telefone_input" for="telefone">Telefone</label>
										<input type="number" class="form-control" name="telefone_input" id="telefone" required>
									</div>
									<div class="form-group mb-4">
										<label id="email_input" for="email">Email</label>
										<input type="email" class="form-control" name="email_input" id="email" required>
									</div>
									<div class="form-group form-group-text mb-4">
										<label id="text_input" for="mensagem">Mensagem</label>
										<textarea class="form-control" id="mensagem" name="text_input" rows="3" required></textarea>
									</div>
									<button type="submit" class="btn btn-primary button-form"><i class="fa fa-send"></i> | Enviar</button>
								</form>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>

		<div class="overlay"></div>

		
		
	</section>

	<section class="mapa my-10">
		<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.900538423509!2d-46.56627328448113!3d-21.78411010425126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c9dce5632a8a1b%3A0xb61e26537ea7b4e4!2sMimapely+Construtora+e+Incorporadora!5e0!3m2!1spt-BR!2sus!4v1506449054352' width='100%' height='300' frameborder='0' style='border:0' allowfullscreen></iframe>
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