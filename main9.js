const tickets = [
    {
        id:1,
        nombre: "Maria",
        asunto: "Reembolso",
        tipo:"urgente",
        tiempoDeResolucion: 11,
        
    },
    {
        id:2,
        nombre: "carlos",
        asunto: "Error de envio",
        tipo:"urgente",
        tiempoDeResolucion: 10,
         
    },
    {
        id:3,
        nombre: "pedro",
        asunto: "Problema de pago",
        tipo:"Normal",
        tiempoDeResolucion: 6,
        
    }
]

let divticket =document.createElement("div");
divticket.id= 'divticket';
document.body.appendChild(divticket)







let botonCargar = document.getElementById("botonCargar")

botonCargar.addEventListener ("click", function() {
   for (ticket of tickets) {
       divticket .innerHTML += `
       <p> ID: ${ticket.id} </p>,
       <p> Nombre: ${ticket.nombre}</p>,
       <p> asunto: ${ticket.asunto}</p>,
       <p>Tipo: ${ticket.tipo}</p>
       `
    }
 
})

























































/*
boton1 = document.getElementById ("cargarDatos")

boton1.addEventListener("click", function(){
    let nombre = document.getElementById("pNombre").value
    console.log(nombre)
})
*/


/*
let miformulario = document.getElementById ("formulario");
miformulario.addEventListener("submit", validarformulario);

function validarformulario(e) {
    e.preventDefault();
    console.log("Formulario Enviado");
}

*/