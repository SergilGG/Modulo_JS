

let var_1 = 1
let var_2 = "dos"
let var_3 = 3.0

let info_usuario = prompt("¿Cuál es tu nomre?")
console.log("Hola ", info_usuario, " espero que estés muy bien hoy.")

let edad_usuario = prompt(`¿Cuál es tu edad, ${info_usuario}?`)

if(edad_usuario >= 18){
console.log(`Vaya, veo que ya eres mayor de edad querido ${info_usuario}`)
}else{
   alert(`Oh no!, no podrás visualizar el contenido de la página, eres menor de edad, los siento ${info_usuario}`)
}