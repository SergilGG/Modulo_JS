// /*Practica
// 1- 1- Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?“), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.*/

// let question= prompt("Eres bellisimo/a?");

// if (question == "si" || question == "Si" || question == "SI"){
//     console.log("Ciertamente\n")
// }else{
//     console.log("No te creo\n")
// }

// /*2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm */

// console.log("*******************");

// let number= prompt("Dame un número?");

// if ((number % 2) == 0){
//     console.log(`El número ${number} es divisible entre 2\n`);
// }else{
//     console.log(`El número ${number} NO es divisible entre 2\n`);
// }


// /*3- Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.*/
// console.log("*******************");

// let number2= parseInt(prompt("Dame un número__?"));
// let arrayNumbers = [];
// let index=1;

// while (index <= number2){
//     if ((index % 5) == 0 || index == 1){
//         console.log(`El número ${index} es múltiplo de 5\n`);
//     }
//     index++;
// }


// /*4 - Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.*/
// console.log("*******************");

// let number3= parseInt(prompt("Dame un número entre 1 y 50 *?"));
// let number4= parseInt(prompt("Dame otro número entre 1 y 50 *?"));

// for(let index=1; index <= 50; index++){
//     if(index === number3 || index === number4){
//         console.log("Lotería!");
//     }else{
//         console.log(index);
//     }
// }


// /*Crea un programa que imprima en consola los números impares del 1 al 50. (con ciclo For)*/
// console.log("*******************");
// for(let i=1; i<=50; i++){
//     if(i % 2 == 1){
//         console.log(i);
//     }
// }


//Piedra papel o tijera
console.log("*******************");
let IAselection;
let next

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


do{
    let userSelection= parseInt(prompt("Juguemos piedra, papel o tijera, elige alguno ( 1-Piedra, 2-Papel, 3-Tijera"));
    let IAselection = getRandomInt(1,3);
    console.log(IAselection);

    if(IAselection==1){
        realSelectionIA = "Piedra";
    }else if(IAselection==2){
        realSelectionIA = "Papel";
    }else{
        realSelectionIA = "Tijera";
    }

    if(userSelection==1){
        realSelectionUser = "Piedra";
    }else if(userSelection==2){
        realSelectionUser = "Papel";
    }else{
        realSelectionUser = "Tijera";
    }


    console.log("La IA ha elegido "+realSelectionIA+" y  tú "+realSelectionUser)

    if (userSelection > IAselection){
        console.log("Rayos!, ganaste");
    }else if(userSelection == 1 && IAselection == 3){
        console.log("Rayos!, ganaste");
    }else if (userSelection == IAselection){
        console.log("Empatamos");
    }else{
        console.log("Jajaja, te gané");
    }
    next = prompt("Quieres seguir jugando?")   
}while(next == "si" || next == "Si" || next == "SI")

