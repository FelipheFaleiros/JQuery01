$(document).ready(function(){
    //Escondendo um elemento com o efeito de "sliding"
// $(".courses_list .course_item_inner:eq(3)").slideUp("fast");
    
    // jQuery.fx.off=true; //desativa as animações, a função logica continua funcionando

    //Exibindo um elemento com o efeito de "sliding"
    $(".courses_list .course_item_inner:eq(3)").slideDown(4000);
    
    //Exibindo ou escondendo um elemento com o efeito de "sliding"
    $(".btn_toggle_item").on("click", function(){

        $(this).prev(".course_item_inner").slideToggle(1200, function(){
            console.log("Sumi ou apareci, deslizando")
        });
    });

  $("#disable_effects").on("click", function(){
    jQuery.fx.off = !jQuery.fx.off;
  });
  
});