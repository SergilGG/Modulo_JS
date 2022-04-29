
///W¡hile

/*
let index=0;

while (index<11){
    console.log(index);
    index += 1;
}

let array = [];
let userInput;

while (!(userInput === '')){
    //Pedir informacion
    userInput = prompt("Ingreasa cualquier caracter");
    //Agregar la info en el arreglo
    array.push(userInput);
}

console.log("Indrodujiste estos valores: ,", array);

*/


//Do while

let cont = 0;
do{
    cont ++;
    console.log("Conteo: " + cont);
}while(cont <11)

//For

let conta = 0;
for (let index =1; index<=10;index++){
    if(index %2 == 0){
        conta=cont+1;
        console.log(`${index} es múltiplo de 2`);
    }
}

