const cuentas_ =[
    { nombre: "Sergio", clave: "1234", saldo: 200 },
    { nombre: "Frida", clave: "abc", saldo: 290 },
    { nombre: "Pablo", clave: "1a2b3c",saldo: 67 },
]
localStorage.setItem("data_counts", JSON.stringify(cuentas_));

let usser;

function login(){
    const name = document.getElementById("name")
    const password = document.getElementById("password")
    const form = document.getElementById("form")
    const parrafo = document.getElementById("warnings")
    
    form.addEventListener("submit", e=>{
        e.preventDefault();
        let warning = 0;
        
        cuentas_.forEach(element => {
            if(name.value == element.nombre & password.value == element.clave & warning == 0){
                console.log("Match");
                usser = element;
                console.log(usser)
                localStorage.setItem("session_count", JSON.stringify(usser));
                location="access_window.html"
                warning=1;
            
            }
        });
        if(warning==0){
            alert("Contraseña y/o usuario incorrectos.");
            resetValue("name")
            resetValue("password")
        }
    })    
}

function resetValue(element_id){
    console.log("Limpiando...");
    document.getElementById(element_id).value="";
}


login()


