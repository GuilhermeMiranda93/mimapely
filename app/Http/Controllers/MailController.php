<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Mail;
use App\Texto;

class MailController extends Controller
{
    public function sendmail(Request $request){
        $nome = $request->input('nome_input');
        $email = $request->input('email_input');
        $telefone = $request->input('telefone_input');
        $mensagem = $request->input('text_input');


        $data = [

        'nome' => $nome,
        'email' => $email,
        'telefone' => $telefone,
        'mensagem' => $mensagem
        ];

        Mail::send('emails.body', $data, function ($message){
         $message->from('contato@mimapely.com.br', 'Contato - Site');
         $message->to('contato@mimapely.com.br', 'Administrador')->subject('Contato - Site');
        });

        $telefone = Texto::where('localizacao',1)
        ->where('ativo',1)
        ->where('excluido',0)
        ->get();

        $endereco = Texto::where('localizacao',2)
        ->where('ativo',1)
        ->where('excluido',0)
        ->get();

        $email = Texto::where('localizacao',3)
        ->where('ativo',1)
        ->where('excluido',0)
        ->get();

        $redessociais = Texto::where('localizacao',4)
        ->where('ativo',1)
        ->where('excluido',0)
        ->get();



        // Mail::send('emails.body', $data, function($mensagem) {

        //  $mensagem->from('desenvolvimento02@soitic.com', 'Contato - Site');
        //  $mensagem->to('desenvolvimento02@soitic.com', 'Administrador')->subject('Contato - Site');

        // });


        return view('emails.sucess',[

            'telefone' => $telefone,
            'email' => $email,
            'endereco' => $endereco,
            'redessociais' => $redessociais

            ]);

    }
}
