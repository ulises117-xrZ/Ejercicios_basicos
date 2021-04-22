function conversor(dato, deque){
    if (deque){
        let resultado = (dato* 1.8) + 32;
        return `La conversion de ${dato} grados celsius a grados fahrenheit es ${resultado} grados farenheits`
    } else {
        let resultado2 = Math.round((dato - 32)/1.8);
        return `La conversion de ${dato} grados farenheits a grados celsius es ${resultado2} grados celsius`
    }
}
let grados = parseInt(prompt("Seleccione la opcion que necesite: 1: de farenheits a celsius  2: de celsius a farenheits"));

if ( grados == 1){
    let valor1 = parseInt(prompt(`escriba sus grados farenheits para pasarlos a celsius`));
    let deque = true;
    alert(conversor(valor1, deque));
} else if( grados == 2){
    let valor2 = parseInt(prompt(`escriba sus grados celsius para pasarlos a farenheits`));
    deque = false;
    alert(conversor(valor2, deque));
} else{
    alert("Porfavor ingrese un número valido")
}
