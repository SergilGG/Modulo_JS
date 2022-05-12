// crear ua cartelera de cine con html que contenga la siguiente información
// Titulo,
// Duración,
// Asientos,
// disponibilidad,
// costo

// y crear un formulario con la siguiente informacion
// Nombre
// Pelicula (se llena al momento de darle click al boton de compra de la pelicula)
// cantidad de boletos a comprar
// Monto del boleto
// Total (el cual se debe llenar por js calculando la cantidad de boletos * el monto)
// el formulario debe contener un boton de enviar, el cual al momento de darle click debe prevenir su evento y hacer el siguiente codigo
// validar que existan asientos disponibles en caso de no existir asientos disponibles, indicarle al usuario
// en caso de existir asientos mostrar en un elemento div la informacion de la compra


document.addEventListener("DOMContentLoaded", function () {
    escuchaEventosHtml();
    eventoSubmit();
});

const escuchaEventosHtml = () => {
    const btn1 = document.getElementById("boton1");
    const btn2 = document.getElementById("boton2");
    const btn3 = document.getElementById("boton3");
    //const elementoPadre = document.getElementById("elementoPadre");
    // elementoPadre.addEventListener("click", function (e) {
    //     console.log(e.target);
    // });
    btn1.addEventListener("click", function () {
        console.log(btn1.dataset.pelicula, btn1.dataset.disponibilidad);
        InformacionPelicula(btn1.dataset.pelicula, btn1.dataset.disponibilidad);
    });
    btn2.addEventListener("click", function (e) {
        console.log(e);
        console.log(btn2);
    });
    btn3.addEventListener("click", function () {
        console.log(btn3);
    });
    const enlace = document.getElementById("enlaceFacebook");
    enlace.addEventListener("click", function (e) {
        console.log(e);
        e.preventDefault();
        alert("No quiero");
    });
};

const InformacionPelicula = (titulo, boletos_dis) => {
    const FormularioPelicula = document.getElementById("FormularioPelicula");
    FormularioPelicula.value = titulo;
    FormularioPelicula.disabled = true;

    const FormularioDispo = document.getElementById("FormularioBoletos_Dispo");
    FormularioDispo.value = boletos_dis;
    FormularioDispo.disabled = true;
};

const eventoSubmit = (e) => {
    const submit = document.getElementById("FormularioSubmit");
    submit.addEventListener("click", function (e) {
        console.log(e);
        e.preventDefault();
        console.log("hola");
    });
};
