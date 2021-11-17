$(document).ready(function(){
    $("#init_effect").on("click", function(){
        $(".logo").animate({
            marginTop: "+=90px"
        })
        .delay(500)
        .animate({
            marginLeft: "+=300px"
        })
        .queue(function(){
            $("h1").text("Animação concluída").css({
                "color": "red"
            });
            $(this).dequeue();
        })
        .delay(1200)
        .fadeOut(2000);
    });

    $("#stop_effect").on("click", function(){
        // $(".logo").stop(true)//parar animação onde ela estiver 
        // $(".logo").stop(true, true)//finalizara o evento que estiver ocorrendo e não iniciara as proximas

        $(".logo").finish(); //realiza toda a sequencia de comando de uma vez(sem animação)
    });
});