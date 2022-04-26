//alert("Esta es una alerta")

console.log('Esta es una impresión de pantalla')
console.log(3+4+6+34)
console.log(`La suma de 4+5 es: ${4+5}`)   //Signo de tilde para este caso.
document.write(`Hola, este es una impresion de navegador`)


//Variables

let mivariable = "Hola"
let string_var= "Otra cadena"
let num_var = 4
let float_var = 4.4
let boolean_var = true

let variable_no_definida = undefined 
let variable_nula = null  // valor nulo 


//prompt   --> muestra una ventana emergente apra meter datos dinámicos y guardarlo en una variable.

let info_usuario = prompt("¿Cuál es tu edad?")

console.log("Naciste en el año " + (2022-info_usuario))

if(info_usuario >= 18){
    alert("Eres mayor de edad, adelante!")
}else{
    alert("Aun no puedes passar, lo siento")
}
