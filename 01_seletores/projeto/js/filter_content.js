$(document).ready(function(){
    //Selecionando um elemento por seu conteudo
    // $(".menu li a:contains(About)").css("outline", "solid red 2px")

    //Selecionando um elemento que não possui conteudo 
    // $(".cars_list li:empty").text("Vazio").css({
    //     "background":"blue",
    //     "color": "white"
    // });

    //Selecionando os elementos que possui elementos
    // $(".cars_list li:parent").append("<span style='color:green'>  -Tem valor</span>")

    $(".cars_list li:has(span)").animate({
        fontSize: "30px",
        opacity: 0.7
    },2000)


});
    