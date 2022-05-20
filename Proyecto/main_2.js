
let cuentas = JSON.parse(localStorage.getItem("data_counts"));
let usser = JSON.parse(localStorage.getItem("session_count"));



function getCash() {
    console.log( "Ejecutando función getCash()" );
    let withdrawal_value = parseFloat(document.getElementById("quantity_id").value);
    balance_now = usser.saldo - withdrawal_value;
    console.log("Saldo actual: " + balance_now);
    resetValue("quantity_id");
    if(balance_now >= 10){
        usser.saldo = usser.saldo - withdrawal_value;
        balance(usser.saldo);
        
        alert("Retiraste $"+ withdrawal_value);

    }else{
        alert("No puedes tener un saldo menor a 10");


    }
    ;

}

function deposit() {
    console.log( "Ejecutando función deposit()" );
    let withdrawal_value = parseFloat(document.getElementById("quantity_id").value);
    usser.saldo = usser.saldo
    balance_now = usser.saldo + withdrawal_value;
    console.log("Saldo actual: " + balance_now);
    resetValue("quantity_id");
    if(balance_now <= 990){
        usser.saldo = usser.saldo + withdrawal_value;
        balance(usser.saldo);
        alert("Depositaste $"+ withdrawal_value);
    }else{
        alert("No puedes tener un saldo mayor a 990");
    }
    ;
}

function balance(new_quantity){
    console.log(new_quantity);
    document.getElementById("balance_id").value = new_quantity;
}

function resetValue(element_id){
    console.log("Limpiando...");
    document.getElementById(element_id).value="";
}

function returnHomePage(){
    localStorage.clear();
    
    location="index.html"
}

console.log(usser)
window.onload = balance(usser.saldo);

