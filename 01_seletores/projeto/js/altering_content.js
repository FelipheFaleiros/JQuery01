$(document).ready(function(){

    //Retornando ou definindo o conteúdo HTML de um elemento
    console.log($("header .menu li:eq(1)").html());
    console.log($("header .menu li:eq(1)").html("<a href='www.dominioName.TopLevelDomain'> H </a>"));

    //Retorna ou definindo o conteúdo de texto de um elemento 
    console.log($("header .menu li:eq(2)").text());
    console.log($("header .menu li:eq(2) a").text("JQuery"));

    //Redefinindo o conteúdo de um elemento 
    $("form button").replaceWith("<h4 style='color: red ; text-align: center'> Registre-se </h4>")

    //Redefinindo o conteúdo de um elemento, com outra sintaxe 
    $("<h4 style='color: red ; text-align: center'> Registre-se </h4>").replaceAll("form button")
});
