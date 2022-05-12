document.addEventListener("DOMContentLoaded", function () {
    escuchaEventosHtml();
    eventoSubmit();
    crearHtml(pelicula);
});
const escuchaEventosHtml = () => {
    const btn1 = document.getElementById("boton1");
    const btn2 = document.getElementById("boton2");
    const btn3 = document.getElementById("boton3");
    const elementoPadre = document.getElementById("elementoPadre");
    elementoPadre.addEventListener("click", function (e) {
        console.log(e.target);
    });
    btn1.addEventListener("click", function () {
        InformacionPelicula(btn1.dataset.pelicula);
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

const InformacionPelicula = (titulo) => {
    const FormularioPelicula = document.getElementById("FormularioPelicula");
    FormularioPelicula.value = titulo;
    FormularioPelicula.disabled = true;
};

const eventoSubmit = (e) => {
    const submit = document.getElementById("FormularioSubmit");
    submit.addEventListener("click", function (e) {
        console.log(e);
        e.preventDefault();
        console.log("hola");
    });
};

/* Ejercicio */

const pelicula = [
    {
        id: 1,
        titulo: "Pelicula 1",
        genero: "Accion",
        duracion: "1h",
        asientos: 5,
        disponible: true,
    },
    {
        id: 2,
        titulo: "Pelicula 2",
        genero: "Romtantica",
        duracion: "1h",
        asientos: 10,
        disponible: true,
    },
    {
        id: 3,
        titulo: "Pelicula 3",
        genero: "Comedia",
        duracion: "1h",
        asientos: 0,
        disponible: false,
    },
];

const crearHtml = (pelicula) => {
    const elementoPadre = document.getElementById("elementoPadre");
    pelicula.forEach((pelicula) => {
        const elementoHijo = document.createElement("div");
        elementoHijo.classList.add("col-4", "d-flex", "flex-column");
        elementoHijo.innerHTML = `
        <h3>${pelicula.titulo}</h3>
        <img src="https://via.placeholder.com/200" alt="">
        <p>Genero: ${pelicula.genero}</p>
        <p>Duracion: ${pelicula.duracion}</p>
        <p>Asientos: ${pelicula.asientos}</p>
        <p>Disponible: ${pelicula.disponible}</p>
        <button id="pelicula-${pelicula.id}" data-pelicula="${pelicula.titulo}">
            Comprar Boleto
        </button>
        `;
        elementoPadre.appendChild(elementoHijo);
    });
};
