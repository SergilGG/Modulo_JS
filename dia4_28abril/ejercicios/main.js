/*
Haz un Semáforo.
El semáforo deberá cambiar de luz de Verde a Amarilla y de Amarilla a Roja y luego de nuevo a Verde.
Puedes mostrar la imagen del semáforo cambiando, hacer el cambio con console.log o con alert.
Se debe respetar el orden de los colores:
-     De rojo pasa a Verde.
-     De amarillo puede pasar a Rojo.
-     De Verde pasa a Amarillo.
Extra Challenge 1: Hacerlo con imágenes:
        document.write(“<img src=’http://imagenes.com/luz_verde.png’ >”)
Extra Challenge 2: Usar setInterval y/o setTimeOut para que cambie automáticamente
*/
function sum(){
    console.log("El semáforo está en verde");
    setTimeout(()=>{
        console.log("El semáforo está en amarillo");
        setTimeout(()=>{
            console.log("El semáforo está en rojo");
        }, 2000)
    }, 1000)
}

// while (true){
//     let cont = 0;
//     setInterval(timeChange, 1000, "verde");
//     setInterval(timeChange, 1000, "amarillo");
//     setInterval(timeChange, 1000, "rojo");
//     cont++;
//     if(cont == 2){
//         break
//     }
// }

setInterval(sum,3000);


