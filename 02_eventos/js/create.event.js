//Criando evento personalizado
$(document).ready(function(){
    $("header").on("initPage", function(){

        $(this).find("h1").append(" - Seja Bem-Vindo!!").css({
            color: "blue",
            left: "70px"
        });


        $(this).find("img").animate({
            width: "400px"
        });
    });

    setTimeout(function(){
        
        $("header").trigger("initPage")

    }, 1100);


});