$(document).ready(function(){
    //Criando animações personalizadas
    $("h1").animate({
        fontSize: "50px"
    });//define o titulo para o tamanho de 50px

    $(".course_item h4").on("click", function(){
        $(this).animate({
            wordSpacing: "+=5px"
        },200);
    });//aumenta 5px nos nomes dos cursos a cada click

    $(".course_item").on("click", function(){
        $(this).animate({
            padding: "+=20px"
        },1500)
    });//aumenta o espaçamento superior do campo curso

    $("footer p").on("click", function(){
        $(this).animate({
            letterSpacing: "+=10px"
        },200, function(){
            alert("Aumentou o espaçamento das letras")
        });//aumenta o tamanho do espaçamento das letras que informa os direitos autorais.
    });
});