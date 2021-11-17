
    $("main h1").css("color", "red") //descemente de main
    $("main>.title").css("border", "solid 2px blue") //descendente direto da main

    // Elemento irmão mais proximo -> +
    // Todos elemento irmão -> ~
    $(".paragrafo~p").css({
        "background-color": "red",
        "color" : "white"                   
    });
