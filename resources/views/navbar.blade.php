<nav class="navbar navbar-toggleable-md navbar-light bg-faded fixed-top">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#"><img src="{{URL::asset('img/logoSite.png')}}" class="img-fluid"></a>
  <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
    <ul class="navbar-nav">

      <li class="nav-item {{$activeHome}}">
        <a class="nav-link" href="{{url('/')}}">Home <span class="sr-only">(current)</span></a>
      </li>

      <li class="nav-item dropdown {{$activePortfolio}}">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Portfólio
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="{{url('/fotos')}}">Fotos</a>
          <a class="dropdown-item" href="{{url('/entregues')}}">Entregues</a>
          <a class="dropdown-item" href="{{url('/lancamentos')}}">Lançamentos</a>
          <a class="dropdown-item" href="{{url('/obras-em-andamento')}}">Obras em Andamento</a>
          <a class="dropdown-item" href="{{url('/pre-lancamento')}}">Pré-lançamento</a>
        </div>
      </li>

      <li class="nav-item {{$activeServicos}}">
        <a class="nav-link" href="{{url('/servicos')}}">Serviços</a>
      </li>

      <li class="nav-item {{$activeParceiros}}">
        <a class="nav-link" href="{{url('/parceiros')}}">Parceiros</a>
      </li>

      <li class="nav-item dropdown {{$activeContato}}">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Ajuda
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="{{url('/contato')}}">Fale conosco</a>
          <a class="dropdown-item" href="{{url('/faq')}}">Perguntas Frequentes</a>
          <a class="dropdown-item" href="{{url('/nossa-cidade')}}">Newsletter</a>
        </div>
      </li>

      

    </ul>
  </div>
</nav>