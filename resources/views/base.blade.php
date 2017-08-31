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

	@component('js_bottom')
	@endcomponent

</body>

</html>