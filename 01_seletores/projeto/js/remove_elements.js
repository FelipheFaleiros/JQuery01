$(document).ready(function(){

    //Removendo o elemento (o campo todo)
    // $(".cars_list li:eq(1)").remove();

    //Removendo conteudo (apenas oq tiver dentro do campo)
    // $(".cars_list li:eq(1)").empty();
    
     
    $(".paragrafo").click(function(){
        $(this).html("Você clicou em mim!");
    });

   // removendo um elemento. mas mantendo seus eventos por meio do detach e não remove  
    let txt = $(".paragrafo").detach();
     
    $("section main p").before(txt);

    //Removendo elementos que esteja em volta de outro
    $(".cars_list li").unwrap();
    
  
});
