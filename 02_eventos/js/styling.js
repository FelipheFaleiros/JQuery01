$(document).ready(function(){

    $(window).scroll(function(){
        let position = $(window).scrollTop();

        let sections = [".title", ".books", ".register"];

        let index

        if (position < 50) {
            index = 0;
        } else if (position < 200) {
            index = 1;
        } else if (position < 400) {
            index = 2;
        }

        $(sections[index]).addClass("selected_section");

        sections.splice(index, 1);

        $(sections.join(", ")).removeClass("selected_section");
    });

    // $("#books_list tbody td").on("click contextmenu", function(event){

    //     if (event.type == "contextmenu") event.preventDefault();

    //     $("#books_list tbody td").css({
    //         backgroundColor: "initial",
    //         color: "initial",
    //     });
    //     $(this).css({
    //         backgroundColor:"black",
    //         color:"white"
    //     });

    // });

    
});