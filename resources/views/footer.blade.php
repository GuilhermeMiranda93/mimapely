<footer class="pt-5">
    <div class="container">
        <div class="row">


            <div class="col-12 col-md-4 col-lg-4">
                <ul class="text-left">
                    <h6>SAIBA MAIS</h6>
                    <li><a href="{{url('/sobre')}}">Sobre</a></li>
                    <li><a href="{{url('/projetos')}}">Empreendimentos</a></li>
                    <li><a href="{{url('/parceiros')}}">Parceiros</a></li>
                    <li><a href="{{url('/contato')}}">Contato</a></li>
                </ul>
            </div>

            <div class="col-12 col-md-4 col-lg-4">
                <img class="img-fluid p-4" src="{{URL::asset('img/logo_branco.png')}}" alt="">
            </div>
            
            <div class="col-12 col-md-4 col-lg-4">

                <ul class="text-right">
                    <h6 class="">FALE CONOSCO</h6>
                    @foreach($telefone as $item)
                    <li><p>{{$item->descricao}}</p></p></li>
                    @endforeach
                    @foreach($email as $item)
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