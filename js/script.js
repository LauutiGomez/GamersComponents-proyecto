// Array general de todos los productos
let productos = [
    //Stock de Memorias-Ram
    {
        id: 0,
        nombre: "Memoria GeiL DDR4 16GB 3000MHz Super Luce RGB Black",
        precio: 22700,
        stock: 3,
        img: "./img/memorias-ram/Memoria-GeiL-DDR4-16GB-3000MHz-Super-Luce-RGB-Black.jpg",
        categoria: ["memoriasRam"]
    },
    {
        id: 1,
        nombre: "Memoria GeiL DDR4 16GB 3000MHz Orion RGB Red",
        precio: 19000,
        stock: 4,
        img: "./img/memorias-ram/Memoria-GeiL-DDR4-16GB-3000MHz-Orion-RGB-Red.png",
        categoria: ["memoriasRam"]
    },
    {
        id: 2,
        nombre: "Memoria Patriot Viper DDR4 16GB (2x8GB) 3200MHz Steel RGB",
        precio: 22650,
        stock: 4,
        img: "./img/memorias-ram/Memoria-Patriot-Viper-DDR4-16GB-(2x8GB)-3200MHz-Steel-RGB.png",
        categoria: ["memoriasRam"]
    },
    {
        id: 3,
        nombre: "Memoria Adata DDR4 8GB 3200MHz XPG Spectrix D60G RGB Titanium",
        precio: 11850,
        stock: 3,
        img: "./img/memorias-ram/Memoria-Adata-DDR4-8GB-3200MHz-XPG-Spectrix-D60G-RGB-Titanium.png",
        categoria: ["memoriasRam"]
    },
    {
        id: 4,
        nombre: "Memoria Kingston DDR4 8GB 3200MHz Fury Beast RGB",
        precio: 11900,
        stock: 2,
        img: "./img/memorias-ram/Memoria-Kingston-DDR4-8GB-3200MHz-Fury-Beast-RGB.jpg",
        categoria: ["memoriasRam"]
    },
    {
        id: 5,
        nombre: "Memoria Team DDR4 8GB 3600MHz T-Force Delta White CL18",
        precio: 14650,
        stock: 5,
        img: "./img/memorias-ram/Memoria-Team-DDR4-8GB-3600MHz-T-Force-Delta-White-CL18.jpg",
        categoria: ["memoriasRam"]
    },
    //STOCK PLACAS DE VIDEO
    {
        id: 6,
        nombre: "Placa De Video GeForce GTX 1650 4Gb Msi Ventus Xs Oc",
        precio: 60000,
        stock: 5,
        img: "./img/placas-de-video/Placa-De-Video-GeForce-GTX-1650-4Gb-Msi-Ventus-Xs-Oc.jpg",
        categoria: ["placasDeVideo"]
    },
    {
        id: 7,
        nombre: "Placa De Video GEFORCE GTX 1660 SUPER 6GB MSI VENTUS XS OC",
        precio: 74000,
        stock: 3,
        img: "./img/placas-de-video/Placa-De-Video-GEFORCE-GTX-1660-SUPER-6GB-MSI-VENTUS-XS OC.jpg",
        categoria: ["placasDeVideo"]
    },
    {
        id: 8,
        nombre: "Placa De Video EVGA Nvidia Geforce RTX 2060 KO Ultra Gaming 6GB GDDR6",
        precio: 84000,
        stock: 4,
        img: "./img/placas-de-video/Placa-De-Video-EVGA-Nvidia-Geforce-RTX-2060 KO-Ultra-Gaming-6GB-GDDR6.jpg",
        categoria: ["placasDeVideo"]
    },
    {
        id: 9,
        nombre: "Placa De Video GeForce RTX 3080 Ti 12Gb Msi Gaming X Trio",
        precio: 400000,
        stock: 2,
        img: "./img/placas-de-video/Placa-De-Video-GeForce-RTX-3080-Ti-12Gb-Msi-Gaming-X-Trio.jpg",
        categoria: ["placasDeVideo"]
    },
    {
        id: 10,
        nombre: "Placa De Video GeForce RTX 3090 24Gb Asus Rog Strix Gaming Oc Blanco",
        precio: 500000,
        stock: 1,
        img: "./img/placas-de-video/Placa-De-Video-GeForce-RTX-3090-24Gb-Asus-Ro-Strix-Gaming-Oc-Blanco.jpeg",
        categoria: ["placasDeVideo"]
    },
    //Stock de Mothers
    {
        id: 11,
        nombre: "Mother Asrock X570 Steel Legend AM4 PCIe Gen4",
        precio: 43200,
        stock: 3,
        img: "./img/mothers/Mother-Asrock-X570-Steel-Legend-AM4-PCIe-Gen4.jpg",
        categoria: ["mothers"]
    },
    {
        id: 12,
        nombre: "Mother Asrock B450 Steel Legend AM4 RGB Dual M.2 Dual USB 3.1",
        precio: 29900,
        stock: 3,
        img: "./img/mothers/Mother-Asrock-B450Steel-Legend-AM4-RGB-Dual-M.2-Dual-USB-3.1.jpg",
        categoria: ["mothers"]
    },
    {
        id: 13,
        nombre: "Mother ASUS ROG STRIX B550-F GAMING AM4 PCI-E 4.0",
        precio: 54150,
        stock: 4,
        img: "./img/mothers/Mother-ASUS-ROG-STRIX-B550-F-GAMING-AM4-PCI-E-4.0.jpg",
        categoria: ["mothers"]
    },
    {
        id: 14,
        nombre: "Mother Asrock B550 Phantom Gaming ITX/AX",
        precio: 50300,
        stock: 2,
        img: "./img/mothers/Mother-Asrock-B550-Phantom-Gaming-ITX.jpg",
        categoria: ["mothers"]
    },
    {
        id: 15,
        nombre: "Mother-ASUS-ROG-STRIX-B450-F-GAMING-II-AM4",
        precio: 41350,
        stock: 1,
        img: "./img/mothers/Mother-ASUS-ROG-STRIX-B450-F-GAMING-II-AM4.jpg",
        categoria: ["mothers"]
    },
    //Stock de Gabinetes
    {
        id: 16,
        nombre: "Gabinete Be Quiet! PURE BASE 500DX White",
        precio: 31310,
        stock: 3,
        img: "./img/gabinetes/Gabinete-Be-Quiet!-PURE-BASE-500DX-White.jpg",
        categoria: ["gabinetes"]
    },
    {
        id: 17,
        nombre: "Gabinete Corsair Crystal 680X RGB TG Smart White",
        precio: 80450,
        stock: 3,
        img: "./img/gabinetes/Gabinete-Corsair-Crystal-680X-RGB-TG-Smart-White.jpg",
        categoria: ["gabinetes"]
    },
    {
        id: 18,
        nombre: "Gabinete Corsair Crystal 465X RGB iCue Smart Black Mid Tower",
        precio: 42950,
        stock: 4,
        img: "./img/gabinetes/Gabinete-Corsair-Crystal-465X-RGB-iCue-Smart-Black-Mid-Tower.jpg",
        categoria: ["gabinetes"]
    },
    {
        id: 19,
        nombre: "Gabinete Lian Li O11 Dynamic XL ROG Certify White ARGB",
        precio: 86700,
        stock: 2,
        img: "./img/gabinetes/Gabinete-Lian-Li-O11-Dynamic-XL-ROG-Certify-White-ARGB.jpg",
        categoria: ["gabinetes"]
    },
    {
        id: 20,
        nombre: "Gabinete ASUS ROG STRIX GX601 Helios Evangelion Edition ARGB",
        precio: 99000,
        stock: 1,
        img: "./img/gabinetes/Gabinete-ASUS-ROG-STRIX-GX601-Helios-Evangelion-Edition-ARGB.jpg",
        categoria: ["gabinetes"]
    },
    //Stock de Fuentes
    {
        id: 21,
        nombre: "Fuente ASUS ROG STRIX 750W 80 Plus Gold Full Modular 750G",
        precio: 27900,
        stock: 3,
        img: "./img/fuentes/Fuente-ASUS-ROG-STRIX-750W-80-Plus-Gold-Full-Modular-750G.jpg",
        categoria: ["fuentes"]
    },
    {
        id: 22,
        nombre: "Fuente ASUS ROG THOR 1200W 80 Plus Platinum 1200P Full modular",
        precio: 74050,
        stock: 3,
        img: "./img/fuentes/Fuente-ASUS-ROG-THOR-1200W-80-Plus-Platinum-1200P-Full-modular.jpg",
        categoria: ["fuentes"]
    },
    {
        id: 23,
        nombre: "Fuente Be Quiet! 700W 80 Plus Bronze U9",
        precio: 15290,
        stock: 4,
        img: "./img/fuentes/Fuente-Be-Quiet!-700W-80-Plus-Bronze-U9.jpg",
        categoria: ["fuentes"]
    },
    {
        id: 24,
        nombre: "Fuente ASUS ROG STRIX 850W 80 Plus Gold Full Modular White 850G",
        precio: 32000,
        stock: 2,
        img: "./img/fuentes/Fuente-ASUS-ROG-STRIX-850W-80-Plus-Gold-Full-Modular-White-850G.jpg",
        categoria: ["fuentes"]
    },
    {
        id: 25,
        nombre: "Fuente ASUS ROG THOR 850W 80 Plus Platinum 850P Full modular",
        precio: 49800,
        stock: 1,
        img: "./img/fuentes/Fuente-ASUS-ROG-THOR-850W-80-Plus-Platinum-850P-Full-modular.jpg",
        categoria: ["fuentes"]
    },
    //Stock de Procesadores AMD
    {
        id: 26,
        nombre: "Procesador AMD Ryzen 7 5800X 4.7GHz Turbo AM4",
        precio: 72000,
        stock: 3,
        img: "./img/procesadores-amd/Procesador-AMD-Ryzen-7-5800X-4.7GHz-Turbo-AM4.jpg",
        categoria: ["procesadoresAmd"]
    },
    {
        id: 27,
        nombre: "Procesador AMD Ryzen 5 5600X 4.6GHz Turbo AM4",
        precio: 51200,
        stock: 3,
        img: "./img/procesadores-amd/Procesador-AMD-Ryzen-5-5600X 4.6GHz-Turbo-AM4.jpg",
        categoria: ["procesadoresAmd"]
    },
    {
        id: 28,
        nombre: "Procesador AMD Ryzen 7 5700G 4.6GHz Turbo",
        precio: 65490,
        stock: 4,
        img: "./img/procesadores-amd/Procesador-AMD-Ryzen-7-5700G-4.6GHz-Turbo.jpg",
        categoria: ["procesadoresAmd"]
    },
    {
        id: 29,
        nombre: "Procesador AMD Ryzen 5 5500 4.2GHz Turbo",
        precio: 32000,
        stock: 2,
        img: "./img/procesadores-amd/Procesador-AMD-Ryzen-5-5500-4.2GHz-Turbo.jpg",
        categoria: ["procesadoresAmd"]
    },
    {
        id: 30,
        nombre: "Procesador AMD Ryzen 5 1600 AF Zen+ 12nm AM4",
        precio: 31150,
        stock: 1,
        img: "./img/procesadores-amd/Procesador-AMD-Ryzen-5-1600 AF Zen-AM4.jpg",
        categoria: ["procesadoresAmd"]
    },
    //Stock de Procesadores Intel
    {
        id: 31,
        nombre: "Procesador Intel Core i3 10100 4.3GHz Turbo 10th Gen Socket 1200",
        precio: 25900,
        stock: 3,
        img: "./img/procesadores-intel/Procesador-Intel-Core-i3-10100-4.3GHz-Turbo-10th-Gen-Socket-1200.jpg",
        categoria: ["procesadoresIntel"]
    },
    {
        id: 32,
        nombre: "Procesador Intel Core i5 9500 9th Gen LGA1151",
        precio: 51200,
        stock: 3,
        img: "./img/procesadores-intel/Procesador-Intel-Core-i5-9500-9th-Gen-LGA1151.jpg",
        categoria: ["procesadoresIntel"]
    },
    {
        id: 33,
        nombre: "Procesador Intel Core i5 12600KF 4.90GHz Turbo Socket 1700",
        precio: 65490,
        stock: 4,
        img: "./img/procesadores-intel/Procesador-Intel-Core-i5-12600KF-4.90GHz-Turbo-Socket-1700.jpg",
        categoria: ["procesadoresIntel"]
    },
    {
        id: 34,
        nombre: "Procesador Intel Core i7 12700F 4.9GHz Turbo Socket 1700",
        precio: 81500,
        stock: 2,
        img: "./img/procesadores-intel/Procesador-Intel-Core-i7-12700F-4.9GHz-Turbo-Socket-1700.jpg",
        categoria: ["procesadoresIntel"]
    },
    {
        id: 35,
        nombre: "Procesador Intel Core i9 12900K 5.2GHz Turbo Socket 1700",
        precio: 169550,
        stock: 1,
        img: "./img/procesadores-intel/Procesador-Intel-Core-i9-12900K-5.2GHz-Turbo-Socket-1700.jpg",
        categoria: ["procesadoresIntel"]
    },
];

//array del carrito
let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    sumElementCarrito()
});

const addToCarrito = (prod) => {
    let dataCarrito;
    const existData = carrito.find(data => data.id === prod.id)

    if (existData && existData.cantidad >= existData.stock) {
        window.Swal.fire({
            icon: 'error',
            title: 'No hay suficiente stock',
            confirmButtonColor: '#000000',
        })
        return
    }

    if (existData) {
        carrito.pop(existData)
        dataCarrito = {
            ...existData,
            cantidad: existData.cantidad + 1
        }
    } else {
        dataCarrito = {
            ...prod,
            cantidad: 1
        }
    }
    carrito.push(dataCarrito)
    window.localStorage.setItem("carrito", JSON.stringify(carrito))
    sumElementCarrito()

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: 'Se agrego el producto'
    })
}

const sumElementCarrito = () => {
    const cantCarrito = document.getElementById("carritoContenedor")
    const cantElementInCarrito = JSON.parse(window.localStorage.getItem("carrito"))
    cantCarrito.innerHTML = `${cantElementInCarrito?.length ? cantElementInCarrito.length : 0}`
}

//funcion general para renderizar productos
const renderProducts = (productsRendered) => {
    const containerProductos = document.getElementById("container-productos");
    containerProductos.innerHTML = ''
    productsRendered.map((producto) => {
        let cardProduct = document.createElement("div");
        cardProduct.className = "card-Item";
        cardProduct.innerHTML = `
    <h3>${producto.nombre}</h3>
    <div class="precio-boton"><p>$${producto.precio}</p>
    <br><button id=${producto.id} class="boton-comprar">Comprar</button></div>
    <img src="${producto.img}">`;

        containerProductos.appendChild(cardProduct);
        const element = document.getElementById(`${producto.id}`)
        element.addEventListener("click", () => addToCarrito(producto))
    });
}

renderProducts(productos)

//funcion boton productos para renderizar todos los productos de nuevo
const botonProductos = document.getElementById("boton-productos")
botonProductos.addEventListener("click", productosGenerales)

function productosGenerales() {
    renderProducts(productos)
}

//Filtrado de productos por categoria
const memoriasRam = productos.filter((producto) => producto.categoria.includes("memoriasRam"))
const placasDeVideo = productos.filter((producto) => producto.categoria.includes("placasDeVideo"))
const mothers = productos.filter((producto) => producto.categoria.includes("mothers"))
const gabinetes = productos.filter((producto) => producto.categoria.includes("gabinetes"))
const fuentes = productos.filter((producto) => producto.categoria.includes("fuentes"))
const procesadoresAmd = productos.filter((producto) => producto.categoria.includes("procesadoresAmd"))
const procesadoresIntel = productos.filter((producto) => producto.categoria.includes("procesadoresIntel"))

// boton filtrado de Memorias Ram
const botonFilterMemoria = document.getElementById("filter-memorias")
botonFilterMemoria.addEventListener("click", respuestaClick)

function respuestaClick() {
    renderProducts(memoriasRam)
}

// boton filtrado de Placas de video
const botonFilterPlacasDeVideo = document.getElementById("filter-placas-de-video")
botonFilterPlacasDeVideo.addEventListener("click", respuestaBotonPlacas)

function respuestaBotonPlacas() {
    renderProducts(placasDeVideo)
}
// boton filtrado de Mothers
const botonFilterMothers = document.getElementById("filter-mothers")
botonFilterMothers.addEventListener("click", respuestaBotonMothers)

function respuestaBotonMothers() {
    renderProducts(mothers)
}
// boton filtrado de Gabinetes
const botonFilterGabinetes = document.getElementById("filter-gabinetes")
botonFilterGabinetes.addEventListener("click", respuestaBotonGabinetes)

function respuestaBotonGabinetes() {
    renderProducts(gabinetes)
}
// boton filtrado de Fuentes
const botonFilterFuentes = document.getElementById("filter-fuentes")
botonFilterFuentes.addEventListener("click", respuestaBotonFuentes)

function respuestaBotonFuentes() {
    renderProducts(fuentes)
}
// boton filtrado de Procesador AMD
const botonFilterProcesadorAmd = document.getElementById("filter-procesadores-amd")
botonFilterProcesadorAmd.addEventListener("click", respuestaBotonProcesadoresAmd)

function respuestaBotonProcesadoresAmd() {
    renderProducts(procesadoresAmd)
}
// boton filtrado de Procesador Intel
const botonFilterProcesadorIntel = document.getElementById("filter-procesadores-intel")
botonFilterProcesadorIntel.addEventListener("click", respuestaBotonProcesadoresIntel)

function respuestaBotonProcesadoresIntel() {
    renderProducts(procesadoresIntel)
}

const renderElementCarrito = () => {
    const storageCarrito = JSON.parse(window.localStorage.carrito);
    const containerProductos = document.getElementById("container-modal");
    containerProductos.innerHTML = ''
    storageCarrito.map((producto) => {
        let cardProduct = document.createElement("div");
        cardProduct.className = "card-Item";
        cardProduct.innerHTML = `
    <h3>${producto.nombre}</h3>
    <div class="precio-boton">
    <p>$${producto.precio}</p>
    <p>cantidad a comprar: ${producto.cantidad} </p>
    </div>
    <img src="${producto.img}">`;
        containerProductos.appendChild(cardProduct);
    })
}

const cleanDOMCarrito = () => {
    const containerProductos = document.getElementById("container-modal");
    containerProductos.innerHTML = ''
}

const clearStorageCarrito = () => {
    carrito = []
    window.localStorage.clear()
    cleanDOMCarrito()
    sumElementCarrito()
}


const buttonCarro = document.getElementById("carritoContenedor")
buttonCarro.addEventListener("click", renderElementCarrito)

const vaciarCarrito = document.getElementById("boton-vaciar-carrito")
vaciarCarrito.addEventListener("click", clearStorageCarrito)