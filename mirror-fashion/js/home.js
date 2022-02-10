$('.novidades button').click(function() {
    $('.novidades').toggleClass('painel-aberto');
});

$('.mais-vendidos').click(function() {
    $('.mais-vendidos').toggleClass('painel-aberto');
});

// juntar os efeitos em um código menor
// $('.painel button').click(function() {
//   $(this).parent().toggleClass('painel-aberto'); 
// });