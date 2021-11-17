$(document).ready(function(){

    //Retornando ou definindo o dado de um elemento
    $(".cars_list li").click(function(){

        // console.log($(this).data("ano"))
        console.log(`Esse carro é do ano de ${$(this).data("ano")}`);
    });
    
    //Removendo dados de um elemento, só sendo valido quando este ter sido inserido por nos (não estar no HTML)
    $('.cars_list li:first').removeData("ano",1920)
});