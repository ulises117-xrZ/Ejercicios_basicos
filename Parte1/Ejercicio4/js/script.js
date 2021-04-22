let people = prompt("ingrese su nombre");
let botoncin = document.getElementById('calcular');
let nombre  = document.getElementById('persona');
let ventas = document.getElementById('ventas').value;
let boleano = false;


if(people){
    boleano = true;
    nombre.innerHTML = people;
} else{
    boleano = false;
    alert("porfavor ingrese su nombre para poder verificar, recargue la pagina para poder ingresar su nombre");
}

botoncin.addEventListener('click', ()=>{

    if(ventas <= 50){
        alert("No hay comision");
    } else if ( ventas > 50 && ventas < 499){
        alert('tiene una comision del 10%');
    } else if( ventas > 501){
        alert("tiene una comision del 20%")
    }
})