const parcialPorcentaje = 55 / 100;
const examenPorcentaje  = 30 / 100;
const trabajoPorcentaje = 15 / 100;
let parcial = parseInt(document.getElementById('parcial').value);
let examenFinal = parseInt(document.getElementById('examenFinal').value);
let tareaFinal = parseInt(document.getElementById('tareaFinal').value);
const boton = document.getElementById('calcular');




boton.addEventListener('click', function(){
    let resultadoParcial = parcial*parcialPorcentaje;
    let resultadoExamen = examenFinal * examenPorcentaje;
    let resultadoTarea = tareaFinal * trabajoPorcentaje;

    let conclusion = resultadoParcial + resultadoExamen + resultadoTarea;
    document.getElementById('resultado').innerHTML = conclusion;
    if (conclusion> 6){
        alert('vas bien crack');
    } else if( conclusion < 6){
        alert("echale mas ganas mijo");
    }
});