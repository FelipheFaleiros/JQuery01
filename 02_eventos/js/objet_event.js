$(document).ready(function(){

    $('p').click(function(event){
        //retorna o tipo de evento executado
        // console.log("Você realizou um event " + event.type)
        // console.log(event)

        //Retorna o nome do elemento que clicamos
        // alert(`Você clicou em uma tag <${event.target.localName}>`)

        console.log("TARGET", event.target) //onde o evento ocorreu
        console.log("CURRENT TARGET", event.currentTarget) //onde defini o evento
    });

    //Retorna a posição X e Y do elemento onde ocorreu o evento
    // event.pageX,event.pageY

    $("[name=bio]").keydown(function(event){

    //Retorna o código da tecla
    // console.log(event.keyCode)
    // console.log(event.which)
    
    //Para a extensão padrão do evento
    event.preventDefault()

    //Para a propagação de eventos
    event.stopPropagation()

    });

});