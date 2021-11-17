$(document).ready(function(){

    //Retorna ou define uma propriedade
    $("form [type=checkbox]").prop("checked", true)

    //Removendo uma propriedade -> só é possivel tal façanha caso nos mesmo tenhamos atribuido anteriormente um valor para a propriedade
    $("h1").removeProp("nome")

});