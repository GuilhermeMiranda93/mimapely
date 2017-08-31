<footer class="pt-5">
    <div class="container">
        <div class="row">


            <div class="col-md-4 col-lg-4">
                <ul class="text-left">
                    <h6>SAIBA MAIS</h6>
                    <li><a href="{{url('/')}}">Quem Somos</a></li>
                    <li><a href="{{url('/aecos')}}">O Hotel</a></li>
                    <li><a href="{{url('/cases')}}">Apartamento</a></li>
                    <li><a href="{{url('/servicos')}}">Café-da-manhã</a></li>
                    <li><a href="{{url('/blog')}}">Preços</a></li>
                    <li><a href="{{url('/contato')}}">Reservas</a></li>
                </ul>
            </div>

            <div class="col-md-4 col-lg-4">
            <img src="{{URL::asset('img/logo_BH.png')}}" alt="">
            </div>
            
            <div class="col-md-4 col-lg-4">

                <ul class="text-right">
                    <h6 class="">FALE CONOSCO</h6>
                    @foreach($telefone as $item)
                    <li><p>{{$item->descricao}}</p></p></li>
                    @endforeach
                    @foreach($endereco as $item)
                    <li><p>{{$item->descricao}}</p></li>
                    @endforeach
                    <li>
                        @foreach($redessociais as $item)
                        <a href="{{url($item->url)}}" target="_blank" title="{{$item->titulo}}"><i class="ml-4 fa {{$item->imagem}} fa-2x"></i></a>
                        @endforeach
                    </li>
                </ul>  
                
            </div>

        </div>            
    </div>
    <div class="py-1 footer-info">
        <p class="m-0 text-center">Copyright &copy; <a href="#">Agência ECOS</a> 2017</p>
    </div>
</footer>