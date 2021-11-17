$(document).ready(function(){
    // Evento para quando pressionado o mouse
    $("h1").mousedown(function(){
        alert("Apertei o mouse");
    });
    
    // Evento para quando soltamos o mouse
    $("h1").mouseup(function(){
        alert("Soltei o mouse")
    });

    //Evento para quando pressionarmos e soltar o mouse
    $("h1").click(function(){
        alert("Apertei e soltei o mouse")
    });

    $("h3.books").click(function(){
        $(this).text("Fui clicado");
    });

    //Simulando o clique de um elemento 
    // $("h3.books").click()


    //Event for button right mouse
    $("img").contextmenu(function(){
        alert("Clicked right")
    });

    //click double event
    $("table tbody tr").dblclick(function(){
        $(this).css({
            background:"black",
            color:"white",
        })
    });

    //click simulation
    // $("table tbody tr:eq(2)").dblclick()
 
    //Evento para quando o cursor "passar por cima" (entrar) em um elemento
    // $("table tbody tr").mouseenter(function(){
    //     $(this).addClass("trselected");
    // });

    //Event para quando o cursor "sair de cima" (deixar) um elemento
    // $("table tbody tr").mouseleave(function(){
    //     $(this).removeClass("trselected")
    // });

    //event para quando o cursor "entra" e "saiu" do elemento
    $("table tbody tr").hover(function(){
        $(this).addClass("trselected");
    }, function(){
        $(this).removeClass("trselected")
    });

    //Evento para quando o mouse se movimenta dentro de um elemento
    /* $("table tbody tr").mousemove(function(event){ 
        $("h1").text(`Você está na posição X -> ${event.pageX}; Y ${event.pageY}`);
    });
    */
});
