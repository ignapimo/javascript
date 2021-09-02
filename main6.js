let empleado = [
    { nombre: "josefina", ocupacion :"obrero", antiguedad: 21},
    { nombre: "eduardo", ocupacion :"manager", antiguedad: 10},
    { nombre: "ana", ocupacion :"supervisor", antiguedad: 3},
    { nombre: "jose", ocupacion :"obrero", antiguedad: 7},
    { nombre: "tefy", ocupacion :"pirela", antiguedad: 1},

]


console.log (empleado);


empleado.sort ((a,b) => 
 {
    if (a.antiguedad <b.antiguedad) {
        return - 1;
    }
    else if (a.antiguedad >b.antiguedad )  {
        return 1;
    } else {

        return 0;
    }

    
});



console.log (empleado)
































































/*
const array  = [];


const biblioteca = ["libro1", "libro2",2, true, "libro3",{nombre:"frnacisco", apellido :"pugh"} ]


console.log(biblioteca [8])
*/

/*

const biblioteca = ["libro1", "libro2",2, true, "libro3",{nombre:"frnacisco", apellido :"pugh"} ]

for (let i=0 ; i< 6; i++) {
    console.log (biblioteca[i])
}
*/

/*
const array = [];

const biblioteca1 = ["libro1", "libro2",2, true, "libro3",{nombre:"frnacisco", apellido :"pugh"} ]
const biblioteca2 = [false, "libro5", {marca : "fork", modelo: "ka"}]
const biblioteca3= biblioteca1.concat(biblioteca2)
const biblioteca4 = biblioteca3.slice(3,5)


for (let i=0 ; i< biblioteca1.length; i++) {
    console.log (biblioteca1[i])
}

console.log (biblioteca1.join("-"))

biblioteca1.push ("libro4")

for (let i=0; i< biblioteca1.length;i++) {
    console.log( biblioteca1 [i])
}

console.log (biblioteca4)

console.log (biblioteca3)
*/

/*
let persona = [
    { nombre: "josefina", apellido :"gutierrez", edad: 21},
    { nombre: "eduardo", apellido :"aloja", edad: 21},
    { nombre: "ana", apellido :"guti", edad: 21},
    { nombre: "jose", apellido :"perez", edad: 21},
    { nombre: "tefy", apellido :"pirela", edad: 21},

]

let personita = {nombre:"jose", apellido : "josez", edad: 6}

console.log (persona)

for (let i= 0; i < persona.length; i++) {
    console.log(persona[i].nombre)
    console.log(persona[i].apellido)
    console.log(persona[i].edad)
}

for (persona of persona){
    console.log(persona.nombre)
    console.log(persona.apellido)
    console.log(persona.edad)
}

for (atributo in personita) {
    console.log(atributo)
}

console.log(typeof personita)

console.log ( empleado.map(empleado => empleado.nombre.lenght))

console.log ( empleado.find(empleado => empleado.nombre == "Ana"))

*/
