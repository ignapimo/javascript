class clases {
    constructor(nombre, promedio, asistencia) {
        this.nombre = nombre;
        this.promedio = promedio;
        this.asistencia = asistencia;
    }


resultado (planilla) {
    this.asistencia += planilla;
}

}

let clases1 = new clases("Pepe aguilar", 10, 12)

clases1.resultado(1)



console.log (clases1.asistencia)







































/*
let nombreFran = "Francisco"
let apellidoFran = "pugh"
let edadFran = "x"

let personal = {nombre: "francisco", apellido: "pugh", edad: "x"}

console.log(personal.nombre)
console.log(personal.apellido)
console.log(personal.edad)
*/
/*
const persona1 = {nombre:"francisco", apellido: "pugh", edad: "1", esProfe:true}
const persona2 = {nombre:"maria", apellido: "pugh", edad: "1", esProfe:true}
const persona3 = {nombre:"pedro", apellido: "pugh", edad: "1", esProfe:false}
const persona4 = {nombre:"carlos", apellido: "pugh", edad: "1", esProfe:true}
const persona5 = {nombre:"monica", apellido: "pugh", edad: "1", esProfe:false}

console.log(persona1.nombre)
*/


/*
function Persona(nombre, apellido, edad, esProfe) {
    this.nombre = nombre;
    this.apellido =apellido;
    this.edad = edad;
    this.esProfe = esProfe;
}

const persona1 = new Persona("francisco", "pugh", 1 , true)
const persona2 = new Persona ("lucas", "vega", 1 , false)

console.log(persona1)



function Producto(nombre,precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const producto1 = new Producto("Yerba mate marolio", "amarilla", 12 , true)
console.log(producto1)

for (const atributo in producto1) {
    console.log (producto1[atributo])
}
*/
/*

class pokemon {
    constructor(nombre,tipo,vida,ataque,nivel) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.vida = vida;
        this.ataque = ataque;
        this.nivel = nivel;

    }

    existir(){
        console.log('El pokemon' + this.nombre  + 'esta existiendo');
    }

    atacar (pokemonAtacar) {
        console.log (this.nombre + 'ataco con un daño de' + this.ataque + 'al pokemon'+ pokemonAtacar.nombre)
        pokemonAtacar.recibirAtaque(this.ataque)
    }

    recibirAtaque (dañoAtaque) {
        this.vida -= dañoAtaque.ataque;
        if(this.vida <= 0) {
            console.log ('El pokemon'+this.nombre + 'Ha sido derrotado');
        } else {
            console.log ('El pokemon'+ this.nombre + 'sigue vivo');
        }
    }

}

    let pokemon1 = new pokemon ("pikachu", "electrico", 11,5,1);
    let pokemon2 = new pokemon ("charmander", "fuego", 10,8,1);
    let pokemon3 = new pokemon ("eevee", "normal", 6,4,1);

    pokemon1.existir ();
    pokemon2.existir ();
    pokemon3.existir ();


    pokemon2.atacar(pokemon3);
   */



    
