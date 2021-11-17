$(document).ready(function(){

    // Adicionando um elemento ao final de outro
    // $(".menu ul").append("<li><a href='#'> News </a></li>")

    // Adicionando um elemento ao final de outro em outra sintaxe
    $("<li><a href='#'> News2 </a></li>").appendTo(".menu ul")

    // Adicionando um elemento ao inicio de outro
    $(".menu ul").prepend("<li><a href='#'> Products </a></li>")

    // Adicionando um elemento ao inicio de outro em outra sintaxe
    // $("<li><a href='#'> Products 2</a></li>").prependTo(".menu ul")

    //Adicionando um elemento após outro
    $(".paragrafo").after("<h2> HCode Treinamentos </h2>")

    //Adicionando um elemento após outro, com uma outra sintaxe
    $("<h2> HCode Treinamentos 2 </h2>").insertAfter(".paragrafo")

    //Adicionando um elemento antes de outro
    $(".paragrafo").before("<h2>Introdução</h2>");

    //Adicionando um elemento antes de outro, com uma outra sintaxe
    $("<h2>Introdução 2</h2>").insertBefore(".paragrafo");

    //adicionar um elemento  envolta do outro
    $(".cars_list li").wrap("<i></i>")

    // Adicionando um elemento em volta do conteúdo de outro
    $(".cars_list li").wrapInner("<u></u>")


});