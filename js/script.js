let productos = [
    //Stock de Memorias-Ram
    {
        id: 0,
        nombre: "Memoria GeiL DDR4 16GB 3000MHz Super Luce RGB Black",
        precio: 22700,
        stock: 3,
        img: "../img/memorias-ram/Memoria-GeiL-DDR4-16GB-3000MHz-Super-Luce-RGB-Black.jpg",
        categoria: ["memoriasRam"]
    },
    {
        id: 1,
        nombre: "Memoria GeiL DDR4 16GB 3000MHz Orion RGB Red",
        precio: 19000,
        stock: 4,
        img: "../img/memorias-ram/Memoria-GeiL-DDR4-16GB-3000MHz-Orion-RGB-Red.jpg",
        categoria: ["memoriasRam"]
    },
    {
        id: 2,
        nombre: "Memoria Patriot Viper DDR4 16GB (2x8GB) 3200MHz Steel RGB",
        precio: 22650,
        stock: 4,
        img: "../img/memorias-ram/Memoria-Patriot-Viper-DDR4-16GB-(2x8GB)-3200MHz-Steel-RGB.jpg",
        categoria: ["memoriasRam"]
    },
    {
        id: 3,
        nombre: "Memoria Adata DDR4 8GB 3200MHz XPG Spectrix D60G RGB Titanium",
        precio: 11850,
        stock: 3,
        img: "../img/memorias-ram/Memoria-Adata-DDR4-8GB-3200MHz-XPG-Spectrix-D60G-RGB-Titanium.jpg",
        categoria: ["memoriasRam"]
    },
    {
        id: 4,
        nombre: "Memoria Kingston DDR4 8GB 3200MHz Fury Beast RGB",
        precio: 11900,
        stock: 2,
        img: "../img/memorias-ram/Memoria-Kingston-DDR4-8GB-3200MHz-Fury-Beast-RGB.jpg",
        categoria: ["memoriasRam"]
    },
    {
        id: 5,
        nombre: "Memoria Team DDR4 8GB 3600MHz T-Force Delta White CL18",
        precio: 14650,
        stock: 5,
        img: "../img/memorias-ram/Memoria-Team-DDR4-8GB-3600MHz-T-Force-Delta-White-CL18.jpg",
        categoria: ["memoriasRam"]
    },
    //STOCK PLACAS DE VIDEO
    {
        id: 0,
        nombre: "Placa De Video GeForce GTX 1650 4Gb Msi Ventus Xs Oc",
        precio: 60000,
        stock: 5,
        img: "../img/placas-de-video/Placa-De-Video-GeForce-GTX-1650-4Gb-Msi-Ventus-Xs-Oc.jpg",
        categoria: [""]
    },
    {
        id: 1,
        nombre: "Placa De Video GEFORCE GTX 1660 SUPER 6GB MSI VENTUS XS OC",
        precio: 74000,
        stock: 3,
        img: "../img/placas-de-video/Placa-De-Video-GEFORCE-GTX-1660-SUPER-6GB-MSI-VENTUS-XS OC.jpg",
        categoria: [""]
    },
    {
        id: 2,
        nombre: "Placa De Video EVGA Nvidia Geforce RTX 2060 KO Ultra Gaming 6GB GDDR6",
        precio: 84000,
        stock: 4,
        img: "../img/placas-de-video/Placa-De-Video-EVGA-Nvidia-Geforce-RTX-2060 KO-Ultra-Gaming-6GB-GDDR6.jpg",
        categoria: [""]
    },
    {
        id: 3,
        nombre: "Placa De Video GeForce RTX 3080 Ti 12Gb Msi Gaming X Trio",
        precio: 400000,
        stock: 2,
        img: "../img/placas-de-video/Placa-De-Video-GeForce-RTX-3080-Ti-12Gb-Msi-Gaming-X-Trio.jpg",
        categoria: [""]
    },
    {
        id: 4,
        nombre: "Placa De Video GeForce RTX 3090 24Gb Asus Rog Strix Gaming Oc Blanco",
        precio: 500000,
        stock: 1,
        img: "../img/placas-de-video/Placa-De-Video-GeForce-RTX-3090-24Gb-Asus-Ro-Strix-Gaming-Oc-Blanco.jpeg",
        categoria: [""]
    },
    //Stock de Mothers
    {
        id: 0,
        nombre: "Mother Asrock X570 Steel Legend AM4 PCIe Gen4",
        precio: 43200,
        stock: 3,
        img: "../img/mothers/Mother-Asrock-X570-Steel-Legend-AM4-PCIe-Gen4.jpg",
        categoria: [""]
    },
    {
        id: 1,
        nombre: "Mother Asrock B450 Steel Legend AM4 RGB Dual M.2 Dual USB 3.1",
        precio: 29900,
        stock: 3,
        img: "../img/mothers/Mother-Asrock-B450Steel-Legend-AM4-RGB-Dual-M.2-Dual-USB-3.1.jpg",
        categoria: [""]
    },
    {
        id: 2,
        nombre: "Mother ASUS ROG STRIX B550-F GAMING AM4 PCI-E 4.0",
        precio: 54150,
        stock: 4,
        img: "../img/mothers/Mother-ASUS-ROG-STRIX-B550-F-GAMING-AM4-PCI-E-4.0.jpg",
        categoria: [""]
    },
    {
        id: 3,
        nombre: "Mother Asrock B550 Phantom Gaming ITX/AX",
        precio: 50300,
        stock: 2,
        img: "../img/mothers/Mother-Asrock-B550-Phantom-Gaming-ITX.jpg",
        categoria: [""]
    },
    {
        id: 4,
        nombre: "Mother-ASUS-ROG-STRIX-B450-F-GAMING-II-AM4",
        precio: 41350,
        stock: 1,
        img: "../img/mothers/Mother-ASUS-ROG-STRIX-B450-F-GAMING-II-AM4.jpg",
        categoria: [""]
    },
    //Stock de Gabinetes
    {
        id: 0,
        nombre: "Gabinete Be Quiet! PURE BASE 500DX White",
        precio: 31310,
        stock: 3,
        img: "../img/gabinetes/Gabinete-Be-Quiet!-PURE-BASE-500DX-White.jpg",
        categoria: [""]
    },
    {
        id: 1,
        nombre: "Gabinete Corsair Crystal 680X RGB TG Smart White",
        precio: 80450,
        stock: 3,
        img: "../img/gabinetes/Gabinete-Corsair-Crystal-680X-RGB-TG-Smart-White.jpg",
        categoria: [""]
    },
    {
        id: 2,
        nombre: "Gabinete Corsair Crystal 465X RGB iCue Smart Black Mid Tower",
        precio: 42950,
        stock: 4,
        img: "../img/gabinetes/Gabinete-Corsair-Crystal-465X-RGB-iCue-Smart-Black-Mid-Tower.jpg",
        categoria: [""]
    },
    {
        id: 3,
        nombre: "Gabinete Lian Li O11 Dynamic XL ROG Certify White ARGB",
        precio: 86700,
        stock: 2,
        img: "../img/gabinetes/Gabinete-Lian-Li-O11-Dynamic-XL-ROG-Certify-White-ARGB.jpg",
        categoria: [""]
    },
    {
        id: 4,
        nombre: "Gabinete ASUS ROG STRIX GX601 Helios Evangelion Edition ARGB",
        precio: 99000,
        stock: 1,
        img: "../img/gabinetes/Gabinete-ASUS-ROG-STRIX-GX601-Helios-Evangelion-Edition-ARGB.jpg",
        categoria: [""]
    },
    //Stock de Fuentes
    {
        id: 0,
        nombre: "Fuente ASUS ROG STRIX 750W 80 Plus Gold Full Modular 750G",
        precio: 27900,
        stock: 3,
        img: "../img/fuentes/Fuente-ASUS-ROG-STRIX-750W-80-Plus-Gold-Full-Modular-750G.jpg",
        categoria: [""]
    },
    {
        id: 1,
        nombre: "Fuente ASUS ROG THOR 1200W 80 Plus Platinum 1200P Full modular",
        precio: 74050,
        stock: 3,
        img: "../img/fuentes/Fuente-ASUS-ROG-THOR-1200W-80-Plus-Platinum-1200P-Full-modular.jpg",
        categoria: [""]
    },
    {
        id: 2,
        nombre: "Fuente Be Quiet! 700W 80 Plus Bronze U9",
        precio: 15290,
        stock: 4,
        img: "../img/fuentes/Fuente-Be-Quiet!-700W-80-Plus-Bronze-U9.jpg",
        categoria: [""]
    },
    {
        id: 3,
        nombre: "Fuente ASUS ROG STRIX 850W 80 Plus Gold Full Modular White 850G",
        precio: 32000,
        stock: 2,
        img: "../img/fuentes/Fuente-ASUS-ROG-STRIX-850W-80-Plus-Gold-Full-Modular-White-850G.jpg",
        categoria: [""]
    },
    {
        id: 4,
        nombre: "Fuente ASUS ROG THOR 850W 80 Plus Platinum 850P Full modular",
        precio: 49800,
        stock: 1,
        img: "../img/fuentes/Fuente-ASUS-ROG-THOR-850W-80-Plus-Platinum-850P-Full-modular.jpg",
        categoria: [""]
    },
    //Stock de Procesadores AMD
    {
        id: 0,
        nombre: "Procesador AMD Ryzen 7 5800X 4.7GHz Turbo AM4",
        precio: 72000,
        stock: 3,
        img: "../img/procesadores-amd/Procesador-AMD-Ryzen-7-5800X-4.7GHz-Turbo-AM4.jpg",
        categoria: [""]
    },
    {
        id: 1,
        nombre: "Procesador AMD Ryzen 5 5600X 4.6GHz Turbo AM4",
        precio: 51200,
        stock: 3,
        img: "../img/procesadores-amd/Procesador-AMD-Ryzen-5-5600X 4.6GHz-Turbo-AM4.jpg",
        categoria: [""]
    },
    {
        id: 2,
        nombre: "Procesador AMD Ryzen 7 5700G 4.6GHz Turbo",
        precio: 65490,
        stock: 4,
        img: "../img/procesadores-amd/Procesador-AMD-Ryzen-7-5700G-4.6GHz-Turbo.jpg",
        categoria: [""]
    },
    {
        id: 3,
        nombre: "Procesador AMD Ryzen 5 5500 4.2GHz Turbo",
        precio: 32000,
        stock: 2,
        img: "../img/procesadores-amd/Procesador-AMD-Ryzen-5-5500-4.2GHz-Turbo.jpg",
        categoria: [""]
    },
    {
        id: 4,
        nombre: "Procesador AMD Ryzen 5 1600 AF Zen+ 12nm AM4",
        precio: 31150,
        stock: 1,
        img: "../img/procesadores-amd/Procesador-AMD-Ryzen-5-1600 AF Zen-AM4.jpg",
        categoria: [""]
    },
    //Stock de Procesadores Intel
    {
        id: 0,
        nombre: "Procesador Intel Core i3 10100 4.3GHz Turbo 10th Gen Socket 1200",
        precio: 25900,
        stock: 3,
        img: "../img/procesadores-intel/Procesador-Intel-Core-i3-10100-4.3GHz-Turbo-10th-Gen-Socket-1200.jpg",
        categoria: [""]
    },
    {
        id: 1,
        nombre: "Procesador Intel Core i5 9500 9th Gen LGA1151",
        precio: 51200,
        stock: 3,
        img: "../img/procesadores-intel/Procesador-Intel-Core-i5-9500-9th-Gen-LGA1151.jpg",
        categoria: [""]
    },
    {
        id: 2,
        nombre: "Procesador Intel Core i5 12600KF 4.90GHz Turbo Socket 1700",
        precio: 65490,
        stock: 4,
        img: "../img/procesadores-intel/Procesador-Intel-Core-i5-12600KF-4.90GHz-Turbo-Socket-1700.jpg",
        categoria: [""]
    },
    {
        id: 3,
        nombre: "Procesador Intel Core i7 12700F 4.9GHz Turbo Socket 1700",
        precio: 81500,
        stock: 2,
        img: "../img/procesadores-intel/Procesador-Intel-Core-i7-12700F-4.9GHz-Turbo-Socket-1700.jpg",
        categoria: [""]
    },
    {
        id: 4,
        nombre: "Procesador Intel Core i9 12900K 5.2GHz Turbo Socket 1700",
        precio: 169550,
        stock: 1,
        img: "../img/procesadores-intel/Procesador-Intel-Core-i9-12900K-5.2GHz-Turbo-Socket-1700.jpg",
        categoria: [""]
    },
];

const renderProducts = (productsRendered) => {
    const containerProductos = document.getElementById("container-productos");

    productsRendered.map((producto) => {
        let cardProduct = document.createElement("div");
        cardProduct.className = "card-Item";
        cardProduct.innerHTML = `
    <h3>${producto.nombre}</h3>
    <div class="precio-boton"><p>$${producto.precio}</p>
    <br><button>Comprar</button></div>
    <img src="${producto.img}">`;

        containerProductos.appendChild(cardProduct);
    });
}

renderProducts(productos)

const containerCategorias = document.getElementById("container-categorias")
containerCategorias.innerHTML = `
<h3>Productos</h3>
<ul>
<li><a href="" id="filter-memorias">Memorias ram</a></li>
<li><a href="" id="filter-mothers">Mothers</a></li>
<li><a href="" id="filter-gabinetes">Gabinetes</a></li>
<li><a href="" id="filter-fuentes">Fuentes</a></li>
<li><a href="" id="filter-procesadores-amd">Procesadores AMD</a></li>
<li><a href="" id="filter-procesadores-intel">Procesadores Intel</a></li>
</ul>`

const botonFilterMemoria = document.getElementById("filter-memorias")
const memoriasRam = productos.filter((producto) => producto.categoria.includes("memoriasRam"))
botonFilterMemoria.addEventListener("click", respuestaClick)


function respuestaClick() {
    console.log(memoriasRam)
    renderProducts(memoriasRam)
}