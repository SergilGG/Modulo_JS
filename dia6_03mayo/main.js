console.log("Ejercicio 1")

let reverseString = str => str.split("").reverse().join("");

let palindrome = str => {
    let normal_string = str.toLowerCase().split(" ").join("");;
    let reverse_string = reverseString(str);

    return normal_string == reverse_string ? true : false;
} 


console.log(palindrome("Hola"))
console.log(palindrome("Adios"))
console.log(palindrome("Universo"))
console.log(palindrome("Hola mundo"))
console.log("************")
console.log(palindrome("Arenera"))
console.log(palindrome("arenera"))
console.log(palindrome("Rotomotor"))
console.log(palindrome("Anita lava la tina"))


console.log("Ejercicio 2")
let longestCountry = arr => {
    let first_country_length = arr[0].length;
    let max_country;
    for (index = 1; index < arr.length; index++){
        if( arr[index].length > arr[index-1].length){
            max_country = arr[index]
        }
    }
    return max_country.length > first_country_length ? max_country : arr[0];

}
console.log(longestCountry(["Mexico", "Panama", "Guatemala", "El Salvador"]))


console.log("Ejercicio 3")
let farenheitToCelsius = temp => Math.round((temp-32)*(5/9), 4);

console.log(farenheitToCelsius(100))

console.log("Ejercicio 4")

function argmns(){
    console.log(arguments.length);
}

argmns(3,3,6,6,8)

// 1) Utilizando arrow function, plantillas de texto y desestructuración de objetos, crea una función llamada reproducirPelicula que reciba como argumento un objeto pelicula que contenga las propiedades titulo y director. Al ejecutar la función, debe mostrarse en consola un mensaje como el siguiente:
console.log("Ejercicio 5")
let reproducirPelicula = pelicula =>{
    const {titulo, director} = pelicula
    console.log(`Reproduciendo ${titulo}, dirigida por ${director}`)
}

const pelicula = {
    titulo: 'Titanic',
    director: 'James Cameron',
  };

reproducirPelicula(pelicula);

// 2) Utilizando arrow function, plantillas de texto y desestructuración de arreglos, crea una función llamada obtenerTerceraFruta que reciba como argumento un arreglo frutas que contenga los nombres de al menos cinco frutas distintas, como string. Al ejecutar la función, debe mostrarse en consola un mensaje como el siguiente:

let obtenerTerceraFruta = arr =>{
    const [,,tercer_fruta] = arr;
    console.log(`La tercer fruta del arreglo es: ${tercer_fruta}.`)
}

const frutas = ['Manzana', 'Uva', 'Fresa', 'Papaya', 'Durazno'];
obtenerTerceraFruta(frutas);

// 3) Crea una función llamada multiplicarDosNumeros que no reciba ningún argumento y que al ejecutarse devuelva el resultado de multiplicar dos números declarados globalmente (num1 y num2).
a=5;
b=4;
function multiplicarDosNumeros(){
    return a*b;
}
console.log(multiplicarDosNumeros())

// 4) Crea una función llamada dividirDosNumeros que no reciba ningún argumento y que al ejecutarse devuelva el resultado de dividir un número declarado globalmente (num1) entre un número declarado localmente (num2) dentro de la misma función.

function dividirDosNumeros(){
    return a/b;
}
console.log(dividirDosNumeros())


// // 5) Elige un gato de la lista de gatos ficticios de Wikipedia:
// // https://en.wikipedia.org/wiki/List_of_fictional_felines
// // Crea un objeto llamado myCat que contenga las propiedades que representen
// // la información listada en cada columna en esa página de Wikipedia.
// // Es decir, el objeto debe contener character, earliest_appearance y notes.

my_cat = {
    character: "Cheshire Cat",
    earliest_appearance: "Alice's Adventures in Wonderland",
    notes: "Sometimes raises philosophical points that annoy or baffle Alice. It does, however, appear to cheer her up when it turns up suddenly at the Queen of Hearts' croquet field, and when sentenced to death baffles everyone by having made its head appear without its body, sparking a massive argument between the executioner and the King and Queen of Hearts about whether something that does not have a body can indeed be beheaded."
}

const {character, earliest_appearance, notes} = my_cat;
console.log("Hola, soy un gato ficticio, mejor conocido como", character," \nAparecí por primera vez en ", earliest_appearance," \nNotas: ", notes)

// // 5.2) Imprime el contenido de la propiedad character en consola
// // como parte de un mensaje de bienvenida. El mensaje en consola debe
// // lucir similar a esto:
// // Hola, soy un gato ficticio. Mejor conocido como Chesire Cat. Aparecí por primera vez en Alice’s Adventures in Wonderland.








