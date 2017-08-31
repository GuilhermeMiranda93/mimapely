<nav class="navbar navbar-toggleable-md navbar-light bg-faded fixed-top">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#"><img src="{{URL::asset('img/logo_bh.png')}}" class="img-fluid"></a>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
    <ul class="navbar-nav">

      <li class="nav-item {{$activeHome}}">
        <a class="nav-link" href="{{url('/')}}">Home <span class="sr-only">(current)</span></a>
      </li>

      <li class="nav-item dropdown {{$activeSobre}}">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Quem somos
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="{{url('/o-hotel')}}">O Hotel</a>
          <a class="dropdown-item" href="{{url('/apartamento')}}">Apartamento</a>
          <a class="dropdown-item" href="{{url('/cafe-da-manha')}}">Café-da-Manhã</a>
        </div>
      </li>

      <li class="nav-item dropdown {{$activeInformacoes}}">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Informações
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="{{url('/precos')}}">Preços</a>
          <a class="dropdown-item" href="{{url('/reservas')}}">Reservas</a>
        </div>
      </li>

      <li class="nav-item dropdown {{$activeContato}}">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Contato
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="{{url('/contato')}}">Fale conosco</a>
          <a class="dropdown-item" href="{{url('/localizacao')}}">Localização</a>
          <a class="dropdown-item" href="{{url('/nossa-cidade')}}">Nossa Cidade</a>
        </div>
      </li>

      <li class="nav-item {{$activeSatisfacao}}">
        <a class="nav-link" href="#">Pesquisa de Satisfação</a>
      </li>

      

    </ul>
  </div>
</nav>