$(document).ready(function(){
    // //Esconder um elemento 
    // $(".courses_list div:first").hide(2000)

    // //Exibir elemento
    // $(".courses_list div:first").show("normal")//fast or show

    // //Exibindo ou escondendo um elemento
    // $(".courses_list .course_item:eq(2)").toggle("show")

    // $(".btn_toggle_item").on("click", function(){

    //     $(this).prev(".course_item_inner").toggle(2000); //elemento mais proximo
    // });

    $(".btn_toggle_item").on("click", function(){
        $(this).prev(".course_item_inner").toggle(500);
    });
});