let input = document.querySelector('.horasTrabajadas').value;
let resultado = document.querySelector('.dinerito');
const boton = document.getElementById('calculo');

boton.addEventListener('click', ()=>{
    if(input <= 40){
        let resultados = input * 15;
        resultado.innerHTML= resultados;
    } else if( input == 40){
        let result = input * 40;
        resultado.innerHTML = `has ganado${result}`
    } else if(input > 40 ){
        let extra = input * 15;
        let otro = extra/15 * 20;

        resultado.innerHTML = `otro ${otro}`
    }
})