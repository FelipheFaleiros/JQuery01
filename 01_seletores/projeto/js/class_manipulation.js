$(document).ready(function(){
    // Adicionando uma classe
    // $("header .menu ul li:last a").addClass("stylized_menu")

    // removendo uma classe
    // $("header .menu ul li:last a").removeClass("stylized_menu")

    $("header .menu ul li a").click(function(event){

        //previna-se do padrão -> não faça nada
        event.preventDefault();

        //alterando uma classe cicla ela ativa clica novamente, desativa a classe
        $(this).toggleClass('stylized_menu')
    });

    //Verificação de classe
    // $("header .menu ul li:last a").hasClass("stylized_menu")

    //Verificação de varios item se tem uma classe determinada 
    $('p').each(function(){
        if($(this).hasClass('paragrafo')) {
            $(this).append(`<span style="color: red"> -Eu tenho a classe </span>`)
        }
    });

    // retornando atributo 
    $("img").attr("src")

    // Definindo um atributo
    $("img").attr("src", "assets/images/jquery.jpg")

    // Remover atributo
    $("h1").removeAttr("title")

  
});