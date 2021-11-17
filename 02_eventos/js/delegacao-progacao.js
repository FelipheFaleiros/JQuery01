$(document).ready(function(){

    $("#books_list tbody").on("click", "tr", function(event){
        
    // $("#books_list tbody tr").removeClass("trselected"); //trocar isso por 
    $(event.delegateTarget).find("tr").removeClass("trselected") //por isso -> usando melhor os recursos do JQuery

    $(this).addClass("trselected");

});

    $("#btn_add_book").on("click", function(){
        
        let tr = `
            <tr>
                <td>Til</td>
                <td>José de Alencar</td>
            </tr>

        `;

        $("#books_list tbody").append(tr);
    });

    $("#form_login").on("change", "[name]", function(){
        alert (`Elemento mudou. Seu valor ${$(this).val()} `)
    });

     // Parando a propagação
    $("#form_login [name=bio").on("change", function(event){

        event.stopPropagation();

        $(this).css("background", "red");
    });
});