$(document).ready(function(){
    //seleciona os objetos escondidos na li e apresenta-os
    // $(".cars_list li:hidden").show()

    //seleciona os objetos aparentes na li e esconde eles
    // $(".cars_list li:visible").hide()
    
    //fazer o cod no botão para apresentar
    // $("#show_cars").click(function(){
    //     $(".cars_list li:hidden").css("text-decoration", "underline").show();
    // }); 
    
    //fazer o cod no botão para esconder
    // $("#hide_cars").click(function(){
    //     $(".cars_list li:visible").hide();
    // });

    //simplificando para ter apenas um botão
    $("#toggle_cars").click(function(){
        let hiddenCars = $(".cars_list li:hidden").length;
        
        //*trocar isso* 
        // if (hiddenCars > 0){
        //     $(".cars_list li").show();
        // }
        // else{
        //     $(".cars_list li").hide();
        // }

        //*por isso* 
        let method = (hiddenCars > 0) ? "show" : "hide";

        // podemos resumir esse if na frente do method
        // if (hiddenCars > 0){
        //     method = "show";
        // }
        // else {
        //     method = "hide";
        // } 

        eval(`$(".cars_list li").${method}()`)
    });

    $('[type=radio]').change(function(){
        //selecionando os item checados 
        let value = $('input:checked').val();
        let gender = (value == 'M') ? "Masculino" : "Feminino";
        alert ("Você selecionou o sexo " + gender) //ou  `Você selecionou o sexo ${gender}`
    });
    // Selecionando um botão
    // $("#register :button").text()

    // Selecionando um checkbox
    // $("register :checkbox").trigger("click")

    // Selecionando elemento desabilitado, e escrevendo no campo
    $('#register :disabled').val("email@dominio.com").prop("disabled", false)
    
    $('input').focus(function(){

        $("input:focus").val("Clicou aqui")
    });

    $("#register :submit").click(function(event){

        //evitar que a pagina recarregue e assim mostrando a mensagem
        event.preventDefault();

        console.log("Você clicou no botão submit")
    })

    // Selecionando o botão submit
    // $('#register :submit').css("background-color", "blue")
});
    