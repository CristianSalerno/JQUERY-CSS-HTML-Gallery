var articulos = $('.works .margen')


articulos.on('click', cargarModal)


function cargarModal(event) {
    var url = $(this).find('img').attr('src');
    var titulo = $(this).find('h4').text()
    var subtitulo = $(this).find('h3').text()
    var cerrar = $(this).find('.cerrar').text()
    console.log(cerrar)


    $('body').append(`<div class="modal">
                    <div class="manto">
                    <div class="contenedor">
                    <img src="${url}" alt="">
                    <h4>${titulo}</h4>
                    <h5>${subtitulo}</h5>
                    <div class="cerrar">
                    <i class="fas fa-times-circle"></i>
                    </div>
            </div>
        </div>
</div>`);


    $('.modal').fadeIn(400);
    $('.modal .contenedor').animate({
        'top': '60px'
    }, 400)
    $('.modal .manto').css('height', document.body.clientHeight);
    $('.modal .cerrar').on('click', borrarModal);
    $('.modal .manto').on('click', borrarModal)
    $(document).on('keydown', borrarModal)
}

function borrarModal(event) {

    $('.modal').fadeOut(400, function () {
        $('.modal').remove()
    })
}