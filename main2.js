

let notaAcumulada = 0;
let contador = 0;
                                                
do {
    var valor = parseInt(prompt("ingrese una nota"))
    if (valor <0 || valor >10 ){
        alert ("por favor ingresar un numero del 0 al 10")
    }
    notaAcumulada += valor;
    contador++;

    var sigo = prompt("Desea agregar mas notas")


} while ((valor >=0 && valor <=10) && (sigo == "si"))


let promedio = notaAcumulada/ contador;

if (promedio <6){
    console.log ("estas desaprobado")
} else if ( promedio >=6 && promedio < 8) {
    console.log ("estas aprobado")
} else if ( promedio >= 8 && promedio < 10){
    console.log ("Promocionado")
} else {
    console.log ("estas aprobado")
}





let notasAcumuladas = 0
let cantidadNotas = parseInt(prompt("ingresa el numero de notas"))

for (let i = 0; i < cantidadNotas ; i++) {
    let nota = parseInt(prompt("ingrese nota"))
    notasAcumuladas += nota;

}

let promedio = notasAcumuladas/ cantidadNotas;

if (promedio <6){
    console.log ("estas desaprobado")
} else if ( promedio >=6 && promedio < 8) {
    console.log ("estas aprobado")
} else if ( promedio >= 8 && promedio < 10){
    console.log ("Promocionado")
} else {
    console.log ("estas aprobado")
}



































/*
for (let i=0; i <10 ; i++) {
    console.log (i)
    i =i+2
}

*/

/*

for (let i=0; i<10; i++) {
    console.log (i)
    if (i==5) {
        break
    }
}
console.log ("terminamos")
*/

/*
for (let i = 0; i <10; i++) {
    for ( let j = 0 ; j<5; j++) {
        console.log ("Bienvenidos/as")
    }
}
*/

/*
let valor = Number(prompt("ingrese un valorrr"))

while (valor !=1) {
    console.log(valor)
    valor =Number(prompt("ingrese un valor"))

}
*/