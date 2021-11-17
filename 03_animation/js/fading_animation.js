$(document).ready(function(){
    //Escondendo um elemento com animação "fading"
    $(".courses_list .course_item_inner:eq(3)").fadeOut(2000);
    
    //Exibindo um elemento com a animação "fading"
    $(".courses_list .course_item_inner:eq(3)").fadeIn(500, function(){

        $(this).css("border", "solid yellow 1px")
    });
});