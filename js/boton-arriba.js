function irArriba(pxPantalla){
    window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop;
        console.log(scroll);
        var botonArriba = document.getElementById('botonArriba');

        if(scroll > pxPantalla){
            botonArriba.style.right = 20 + "px";
        }else{
            botonArriba.style.right = -100 + "px";
        }
    })
}
irArriba(100);

var encabezado = document.getElementById('encabezado')

window.addEventListener('scroll', () =>{
    var scroll = window.scrollY;
    if(scroll>10){
        encabezado.style.backgroundColor = '#121212';
    }else{
        encabezado.style.backgroundColor = 'transparent';
    }
})