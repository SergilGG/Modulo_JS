// crear un programa que te haga una seria de preguntas:
// Escenario Eres una persona intentando entrar al cine:
// Para las peliculas de tipo A: pueden entrar solo personas menores de 10 años
// para las pelicuas de tipo B: pueden entrar solo personas entre 15 y 25 años
// para las peliculas de tipo B+: pueden entrar personas mayores a 25 años
// preguntar cuantos boletos van a comprar?
// Precio del boleto: 50 pesos
// Preguntar cantidad de dinero con la que pagaran
// imprimir en un alert cuanto es el cambio



let userAge = prompt("¿Cuál es tu edad?")

console.log("Hola espero que estés muy bien hoy.")

if(userAge >= 5 && userAge <= 10){
    console.log("Puedes pasar solo a películas tipo A")
    let pass = prompt("¿Cuántos boletos deseas, el precio es de $50 por boleto?")
    let cash = prompt("¿Con cuánto pagas?")
    alert(`Tu cambio es $ ${(parseFloat(cash) - (parseFloat(pass)*50))}`)
}else if(userAge >= 15 && userAge <= 25){
    console.log("Puedes pasar solo a películas tipo B")
    let pass = prompt("¿Cuántos boletos deseas, el precio es de $50 por boleto?")
    let cash = prompt("¿Con cuánto pagas?")
    alert(`Tu cambio es $ ${(parseFloat(cash) - (parseFloat(pass)*50))}`)
}else if(userAge > 25){
    console.log("Puedes pasar solo a películas tipo B+")
    let pass = prompt("¿Cuántos boletos deseas, el precio es de $50 por boleto?")
    let cash = prompt("¿Con cuánto pagas?")
    alert(`Tu cambio es $ ${(parseFloat(cash) - (parseFloat(pass)*50))}`)
}else{
    console.log("Lo siento, este cine te excluye por tu edad, no puedes pasar")
}
