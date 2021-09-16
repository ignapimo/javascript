//tickets recibidos para atencion al cliente //


function division(num1, num2) {
    return num1 / num2
}



function solicitarNumero() {
    let numero1 = Number(prompt("Ingrese un numero de tickets"))
    return numero1
}

function solicitarNumero2() {
    let numero2 = Number(prompt("Ingrese numero de tickets resueltos"))
    return numero2
}


let numero1 = solicitarNumero();
let numero2 = solicitarNumero2();
let rendimiento = division(numero1, numero2);


console.log (rendimiento)




let tickets = [
    { ticket: 123, tipo :"mercaderia", prioridad: "alta"},
    { ticket: 254, tipo :"reembolso", prioridad: "reducida"},
    { ticket: 100, tipo :"supervisor", prioridad: "media"},
    { ticket: 49, tipo :"mercaderia", prioridad: "alta"},
    { ticket: 701, tipo :"queja", prioridad: "reducida" }

]


tickets.sort ((a,b) => 
 {
    if (a.prioridad <b.prioridad) {
        return - 1;
    }
    else if (a.prioridad >b.prioridad )  {
        return 1;
    } else {

        return 0;
    }

    
});

console.log (tickets);



boton1 = document.getElementById ("cargarDatos1")

boton1.addEventListener("click", function(){
    let nombre = document.getElementById("Nombre").value
    console.log(nombre)
})

boton2 = document.getElementById ("cargarDatos2")

boton1.addEventListener("click", function(){
    let tipo = document.getElementById("tipo").value
    console.log(tipo)
})

boton3 = document.getElementById ("cargarDatos3")

boton3.addEventListener("click", function(){
    let urgencia = document.getElementById("urgencia").value
    console.log(urgencia)
})





let texto2 = document.createElement("p")

texto2.textContent = "Texto agregado desde JS"

document.body.appendChild (texto2)



console.log (texto2)





/*

const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes','Sabado','Domingo']

dayList = document.getElementById("dayList")

for (const day of days) {
    dayList.innerHTML += `<li>${day}</li>`
}
*/