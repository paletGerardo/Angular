// Funciones del Slider

var indicador = 0;
$(document).on('ready', function(){
    $('.left').on('click', function(e){
        moveSlider('left', false);
    });

    $('.right').on('click', function(e){
        moveSlider('right', false);
    });

    defineSizes();
});

$(window).on('resize', defineSizes);

function defineSizes(){
    $('.PRODUCTOS_container .cadaSlide').each(function(i,el){
        $(el).css({
            'background-image': "url("+$(el).data("background")+")",
            'height': ($('.PRODUCTOS_container').width() * 0.45) + 'px',
            'width': ($('.PRODUCTOS_container').width()) + 'px'
        });
    });
}

function moveSlider(direccion, cambio){
    if(!cambio){
        var limite = $('.PRODUCTOS_container .cadaSlide').length;
        indicador = (direccion == 'right') ? indicador + 1 : indicador -1;
        indicador = (indicador >= limite) ? 0 : indicador;
        indicador = (indicador < 0) ? limite - 1 : indicador;

        $('.PRODUCTOS_container .slideContainer').animate({
            'margin-left': -(indicador * $('.PRODUCTOS_container').width()) + 'px'
        })
    }else{
        indicador = 1000;
        var limite = $('.PRODUCTOS_container .cadaSlide').length;
        indicador = (direccion == 'right') ? indicador + 1 : indicador -1;
        indicador = (indicador >= limite) ? 0 : indicador;
        indicador = (indicador < 0) ? limite - 1 : indicador;

        $('.PRODUCTOS_container .slideContainer').animate({
            'margin-left': -(indicador * $('.PRODUCTOS_container').width()) + 'px'
        })
    }
}
