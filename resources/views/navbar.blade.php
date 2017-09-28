<nav class="navbar navbar-toggleable-md navbar-light fixed-top">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#"><img src="{{URL::asset('img/logoSite.png')}}" class="img-fluid"></a>
  <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
    <ul class="navbar-nav">

      <li class="nav-item {{$activeHome}} mx-3">
        <a class="nav-link" href="{{url('/')}}">HOME <span class="sr-only">(current)</span></a>
      </li>

      <li class="nav-item divider mx-3 hidden-md-down"></li>

      <li class="nav-item {{$activeSobre}} mx-3">
        <a class="nav-link" href="{{url('/sobre')}}">SOBRE</a>
      </li>

      <li class="nav-item divider mx-3 hidden-md-down"></li>

      <li class="nav-item {{$activePortfolio}} mx-3">
        <a class="nav-link" href="{{url('/projetos')}}">EMPREENDIMENTOS</a>
      </li>

      <li class="nav-item divider mx-3 hidden-md-down"></li>

      <li class="nav-item {{$activeParceiros}} mx-3">
        <a class="nav-link" href="{{url('/parceiros')}}">PARCEIROS</a>
      </li>

      <li class="nav-item divider mx-3 hidden-md-down"></li>

      <li class="nav-item {{$activeContato}} mx-3">
        <a class="nav-link" href="{{url('/contato')}}">CONTATO</a>
      </li>

      <li class="nav-item divider mx-3 hidden-md-down"></li>

      <li class="nav-item mx-3">
        <a class="nav-link" href="https://www.facebook.com/Mimapely/" target="_blank"><i class="fa fa-facebook"></i></a>
      </li>


      

    </ul>
  </div>
</nav>