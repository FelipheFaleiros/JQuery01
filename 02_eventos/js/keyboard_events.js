//Events para quando pressionarmos uma tecla
$("#form_login [name=username]").keydown(function(event){
    console.log(`KEYDOWN - Você apertou a tecla com um código ${event.keyCode}`);
});

//Events para quando soltarmos uma tecla
// $("#form_login [name_username]").keyup(function(event){
//     console.log(`Você apertou a tecla com um código ${event.keyCode}`)
// });

//Events para quando uma tecla estiver sendo pressionada
$("#form_login [name=username]").keypress(function(event){
    console.log(`KEYPRESS - Você apertou a tecla com um código ${event.keyCode}`)
});