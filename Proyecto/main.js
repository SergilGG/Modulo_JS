const cuentas =[
    { nombre: "Sergio", clave: "1234", saldo: 200 },
    { nombre: "Frida", clave: "abc", saldo: 290 },
    { nombre: "Pablo", clave: "1a2b3c",saldo: 67 },
]




const name = document.getElementById("name")
const password = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    
    cuentas.forEach(element => {
        if(name.value == element.nombre & password.value == element.clave){
            console.log("Match")
        }else{
            console.log("No matching")
            warnings
        }
    });
})




function withdrawal(){
    const total_quantity=parseFloat(document.getElementById("balance_id").value);
}