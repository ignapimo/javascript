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




let resumen = [
    { ticket: 123, tipo :"mercaderia", prioridad: "alta"},
    { ticket: 254, tipo :"reembolso", prioridad: "reducida"},
    { ticket: 100, tipo :"supervisor", prioridad: "media"},
    { ticket: 49, tipo :"mercaderia", prioridad: "alta"},
    { ticket: 701, tipo :"queja", prioridad: "reducida" }

]


resumen.sort ((a,b) => 
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


console.log (resumen);