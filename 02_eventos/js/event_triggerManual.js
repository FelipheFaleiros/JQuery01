$(document).ready(function(){

    $("h1").on("dblclick", function(){

        $(this).text("SMN - JQuery")
    });
    
    //Acionando um evento manualmente 
    // $("h1").trigger("dblclick")
    $("#form_login").on("submit", function(event){
        event.preventDefault();
        console.log("Aqui estão os valores do formulário", $(this).serializeArray());
    });

    $("#form_login [name=bio]").on("blur", function(event){
        $(event.target.form).trigger("submit");
    });
});