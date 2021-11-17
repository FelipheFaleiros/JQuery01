$.expr[':'].carsCentury21 = function(element){
    // Criando nosso filtro
    return ($(element).data("ano") > 2000);
    // $(".cars_list li:carsCentury21").css("font-size", "30px")//passado no console
}

$.expr[':'].carsBeforeYear = $.expr.createPseudo(function(year){
    
    return function(element) {
        return ($(element).data("ano") < year);
        //$(".cars_list li:carsBeforeYear(1990)").css("color", "orange")//passar no console
    }

});