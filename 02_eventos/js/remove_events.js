$(document).ready(function(){
    let entries = 100;

    $(".register").append(`<u> - Ainda restam ${100 - entries} vagas </u>`);

    $("#form_login [type=submit]").on("click", function(event){
        event.preventDefault(); //parar com o evento padrão
        alert("Você foi cadastrado. Parabéns!!")
    });

    if (entries >=100){
        $("#form_login [type=submit]").off("click")
    }

    /*  Executando evento apenas uma vez */
    $(".books").append("<u> - Marque seus favoritos (Essa ação não pode ser desfeita) </u>")

    $("#books_list tbody tr").on("click", function(){ //pode mudar para on e conseguindo desfazer a ação 
        if (!$(this).hasClass("trselected")) {
            $(this).addClass("trselected");
        } else {
            $(this).removeClass("trselected")
        }
    });

});