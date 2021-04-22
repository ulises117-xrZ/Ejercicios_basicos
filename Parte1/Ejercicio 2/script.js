const PI = 3.1416
let h;
let radio = parseInt(document.getElementById('Radio').value);
let volumen = parseInt(document.getElementById('Volumen').value);
const ecuacion = document.getElementById('calculador');

function calcularAltura(r, v){
    let g = PI * r**2;
    h = (3*v)/ g;
    console.log(h.toFixed(3));
    document.getElementsByTagName("p")[0].innerHTML ="La altura del cono es h: "+ h.toFixed(3);
    
}



ecuacion.addEventListener('click', calcularAltura(radio, volumen));