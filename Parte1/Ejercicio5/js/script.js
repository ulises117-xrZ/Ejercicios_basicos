let nota = document.querySelector('.input').value;
let mostrarNota = document.getElementById('notamostrada');
const boton = document.getElementById('button');


function estilizar(color, puntuacion){
    mostrarNota.style.color = color;
    mostrarNota.innerHTML = `${puntuacion} has sacado un ${nota}`
}


boton.addEventListener('click',()=>{
    if(nota == 100){
        estilizar('green', 'Excelente')
    } else if(nota>=90 && nota <100 ){
        estilizar('blue',"Muy bien")
    }
    else if(nota<90 && nota >=70 ){
        estilizar('orange', "Satisfactorio")
    }
    else if(nota < 70 ){
        estilizar('red', "valiste verga")    
}})