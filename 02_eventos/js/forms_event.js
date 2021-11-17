$(document).ready(function(){
    //Evento para quando o elemento receber o foc(ser selecionado)
    // $("[name]").focus(function(){
    //     $(this).css("background", "yellow")
    // });

    //Even  to para quando o elemento perder o foco
    // $("[name]").blur(function(){ //está fazendo um lup quando apresentado em alert caso use procure utilizar de outra maneira
    //     console.log("Você digitou" + $(this).val())
    // });

    //Evento para quando o elemento receber o foco, mesmo que seja um elemento filho    
    $(".form-group").focusin(function(){
        console.log("Você selecionou uma campo")
    });
  
    //Elemento para quando o elemento perder o foco
    $(".form-group").focusout(function(){
        alert("Você deixou o campo")
    });

    //Evento para quando selecionarmos o valor de um campo do formulário 
    $('[name]').select(function(){
        console.log("Você selecionou o valor deste campo")
    });

    $("form").submit(function(event){

        event.preventDefault(); //previne do padrão

        console.log($(this).serializeArray())
    });

    $("#link_logo").click(function(event){

        event.preventDefault(); //desta forma apenas a imagem é trocada não tenho o procedimento de redirecionar a pagina como informado no HTML 

        $(this).find("img").attr("src", "../img/jquery.jpg")
    });
});