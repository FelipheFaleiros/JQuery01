$(document).ready(function(){

    // $(".header-border li [href]").text("Link");//verificando se possui um atributo
    // $(".header-border li [href][title]").text("Link");//verificando se possui alguns atributos


    $(".header-border li [href='about.html']").text()//que tenha o atributo, respondendo com o nome dado após declaração
    $(".header-border li [href^='i']").text()//que comece com o atributo i, respondendo com o nome dado após declaração
    $(".header-border li [href$='html']").text()//verificado os atributos que terminam com uma expressão específica
    $(".header-border li [href*='html']").text()//verificado os atributos se tem a expressão
});