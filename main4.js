let notasAcumuladas = 0
let cantidadNotas = parseInt(prompt("ingresa cantidad de personas"))

for (let i = 0; i < cantidadNotas ; i++) {
    let nota = parseInt(prompt("ingrese edades de las personas"))
    notasAcumuladas += nota;
    
}

let promedio = notasAcumuladas/ cantidadNotas;

console.log (promedio)