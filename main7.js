const poke = [

{
    id:1,
    nombre: "pikachu",
    tipo: "electrico",
    vidas: 11,
    ataque: 5

},
{
    id:2,
    nombre: "charmander",
    tipo: "fuego",
    vidas: 10,
    ataque: 4


},

{
    id: 3,
    nombre: "eevee",
    tipo: "nomral",
    vidas: 6,
    ataque: 4
}



]

let pokemon1 = "pikachu electrico"
let pokemon2 = "pikachu electrico"
let pokemon3 = "pikachu electrico"
let pokemones = [pokemon1, pokemon2, pokemon3]

localStorage.setItem("pokemones", pokemones)

let pokemones1 = localStorage.getItem ('pokemones')
console.log (pokemones1)