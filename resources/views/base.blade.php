<!DOCTYPE html>
<html lang="pt-BR">

<head>

	@component('meta')
	@endcomponent

	@component('css_top')
	@endcomponent

	@component('js_top')
	@endcomponent

</head>

<body>

	@yield('content')

	<div class="barra-contatos row">
		<div>
			<a href="{{url('/contato')}}"><i class="fa fa-phone fa-2x mr-2"></i>
				<span>Ligamos para você</span>
			</a>
		</div>
		<div class="divider2 mx-4"></div>
		<div>
			<a href="tel:35991411281"><i class="fa fa-phone fa-2x mr-2"></i>
				<span>(35) 4141-1380</span>
			</a>
		</div>
		<div class="divider2 mx-4"></div>
		<div>
			<a href="mailto:atendimento@duoclinic.com.br"><i class="fa fa-envelope fa-2x mr-2"></i>
				<span>Informações por email</span>
			</a>
		</div>
		<div class="divider2 mx-4"></div>
		<div>
			<a href="{{url('/contato')}}"><i class="fa fa-comments fa-2x mr-2"></i>
				<span>Fale com um corretor</span>
			</a>
		</div>
	</div>

	@component('js_bottom')
	@endcomponent

</body>

</html>