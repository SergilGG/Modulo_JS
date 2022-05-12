

window.addEventListener("DOMContentLoaded", function () {
    crearHtml();
    const boleto = "";
    comprarBoletoModal();
});
const cargarPelicula = () => {
    const pelicula = [
        {
            id: 1,
            titulo: "Pelicula 1",
            genero: "Accion",
            duracion: "1h",
            asientos: 5,
            disponible: true,
            precio: 100,
        },
        {
            id: 2,
            titulo: "Pelicula 2",
            genero: "Romantica",
            duracion: "1h",
            asientos: 10,
            disponible: true,
            precio: 50,
        },
        {
            id: 3,
            titulo: "Pelicula 3",
            genero: "Comedia",
            duracion: "1h",
            asientos: 0,
            disponible: false,
            precio: 25,
        },
    ];
    return pelicula;
};
const crearHtml = () => {
    const peliculas = cargarPelicula();
    const elementoPadre = document.getElementById("elementoPadre");
    peliculas.forEach((pelicula) => {
        const elementoHijo = document.createElement("div");
        elementoHijo.classList.add("col-4", "d-flex", "flex-column");
        elementoHijo.innerHTML = `
        <h3>${pelicula.titulo}</h3>
        <img src="https://via.placeholder.com/200" alt="">
        <p>Genero: ${pelicula.genero}</p>
        <p>Duracion: ${pelicula.duracion}</p>
        <p>Asientos: ${pelicula.asientos}</p>
        <p>Disponible: ${pelicula.disponible}</p>
        <p>Precio: ${pelicula.precio}</p>
        <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-primary" id="pelicula-${pelicula.id}" data-pelicula="${pelicula.titulo}">
            Comprar Boleto
        </button>
        `;
        elementoPadre.appendChild(elementoHijo);
    });
    escuchaEvento(); //Acceder a los valores
};

/* const escuchaEvento = () => {
    const elementoPadre = document.getElementById("elementoPadre");
    elementoPadre.addEventListener("click", function (e) {
        console.log(e.target);
        if (e.target.tagName === "BUTTON") {
            const button = e.target;
            const padre = button.parentElement;
            const pelicula = padre.children[0].innerHTML;
            const genero = padre.children[2].innerHTML;
            const duracion = padre.children[3].innerHTML;
            const asientos = padre.children[4].innerHTML;
            const disponible = padre.children[5].innerHTML;
            const precio = padre.children[6].innerHTML;
            console.log(pelicula);
            console.log(genero);
            console.log(duracion);
            console.log(asientos);
            console.log(disponible.split(" ")[1]);
            console.log(precio);
            const obj = {
                pelicula,
                genero,
                duracion,
                asientos,
                disponible: disponible.split(" ")[1],
                precio,
            };
            crearModal(obj);
        }
    });
}; */
const escuchaEvento = () => {
    const elementoPadre = document.getElementById("elementoPadre");
    elementoPadre.addEventListener("click", function (e) {
        console.log(e.currentTarget); //nos dice que el click es del elemento padre.
        console.log(e.target); //nos dice que el click es del boton.
        if (e.target.tagName === "BUTTON") {
            const button = e.target;
            console.log(button.parentElement); //imprimiendo el elemento padre del boton.
            const padre = button.parentElement;
            const obj = {
                pelicula: padre.children[0].innerHTML,
                genero: padre.children[2].innerHTML,
                duracion: padre.children[3].innerHTML,
                asientos: padre.children[4].innerHTML,
                disponible: padre.children[5].innerHTML.split(" ")[1],
                precio: padre.children[6].innerHTML,
            };
            crearModal(obj);
        }
    });
};

const crearModal = (obj) => {
    const modal = document.getElementById("modalBody");
    const cuerpo = document.createElement("div");
    setBoletoAComprar(obj);
    cuerpo.innerHTML = `
        pelicula: ${obj.pelicula}
        <br>
        genero: ${obj.genero}
        <br>
        duracion: ${obj.duracion}
        <br>
        asientos: ${obj.asientos}
        <br>
        disponible: ${obj.disponible}
        <br>
        precio: ${obj.precio}`;
    modal.appendChild(cuerpo);
};
const setBoletoAComprar = (obj) => {
    boleto = obj;
};
const getBoletoAComprar = () => {
    return boleto;
};

const comprarBoletoModal = () => {
    const comprarBoleto = document.getElementById("comprarBoleto");
    comprarBoleto.addEventListener("click", function (e) {
        e.preventDefault();
        const FormularioPelicula =
            document.getElementById("FormularioPelicula");
        const pelicula = (FormularioPelicula.value =
            getBoletoAComprar().pelicula);
    });
};

const borrarHtml = () => {
    const elementoPadre = document.getElementById("elementoPadre");
    elementoPadre.innerHTML = "";
};
