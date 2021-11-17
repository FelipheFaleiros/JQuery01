$(document).ready(function(){

    $(".title").click(function(){
        $(this).css("outline", "5px solid red")
    });

    //clonando evento
    //true -> herdando evento
    let el = $(".title").clone(true);

    el.appendTo("section main");


});
