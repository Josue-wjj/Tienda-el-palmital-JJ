
/* ==========================================
   TIENDA EL PALMITAL J&J
   Catálogo actualizado con imágenes
========================================== */

const WHATSAPP_TIENDA = "50369609617";
const MINIMO_ENVIO_GRATIS = 10;
const COSTO_ENVIO = 1;

const categorias = [
    "Todos",
    "Bebidas",
    "Cocina",
    "Higiene personal",
    "Limpieza",
    "Medicamentos",
    "Snacks"
];

/*
  Las imágenes se guardan dentro de la carpeta "imagenes".
  No se muestran costos de compra ni existencias.
  Los nombres de las imágenes están definidos en cada producto.
*/

const productos = [
    // BEBIDAS
    { id: "coca-cola-2lt", nombre: "Coca cola 2LT", categoria: "Bebidas", imagen: "coca-cola-2lt.jpg", icono: "🥤", precio: 2.00 },
    { id: "coca-cola-2-5-lt", nombre: "coca-cola 2.5 Lt", categoria: "Bebidas", imagen: "coca-cola-2-5-lt.jpg", icono: "🥤", precio: 2.50 },
    { id: "salva-cola-355ml", nombre: "Coca-Cola 354ml Lata", categoria: "Bebidas", imagen: "salva-cola-355ml.jpg", icono: "🥤", precio: 0.80 },
    { id: "fanta-2-5-lt", nombre: "Fanta 2.5 lt Naranja", categoria: "Bebidas", imagen: "fanta-2-5-lt.jpg", icono: "🥤", precio: 2.15 },
    { id: "jugo-del-valle-1-5", nombre: "Jugo del valle 1.5 lt", categoria: "Bebidas", imagen: "jugo-del-valle-1-5.jpg", icono: "🥤", precio: 1.10 },
    { id: "jugo-del-valle-500ml", nombre: "Jugo del valle 500ml", categoria: "Bebidas", imagen: "jugo-del-valle-500ml.jpg", icono: "🥤", precio: 0.65 },
    { id: "jugo-petit-sabor-durazno", nombre: "Jugo petit sabor durazno", categoria: "Bebidas", imagen: "jugo-petit-sabor-durazno.jpg", icono: "🥤", precio: 0.40 },
    { id: "jugo-petit-six-pack", nombre: "Jugo petit sabor manzana", categoria: "Bebidas", imagen: "jugo-petit-six-pack.jpg", icono: "🥤", precio: 0.45 },
    { id: "nectar-petit-sabor-pera", nombre: "Jugo petit sabor pera", categoria: "Bebidas", imagen: "nectar-petit-sabor-pera.jpg", icono: "🥤", precio: 0.40 },
    { id: "pepsi-lata-350ml", nombre: "Pepsi Lata 350ml", categoria: "Bebidas", imagen: "pepsi-lata-350ml.jpg", icono: "🥤", precio: 0.80 },
    { id: "salva-cola-1-25-lt", nombre: "Salva cola 1.25 lt", categoria: "Bebidas", imagen: "salva-cola-1-25-lt.jpg", icono: "🥤", precio: 0.80 },

    // COCINA
    { id: "aceite-capullo", nombre: "Aceite Capullo", categoria: "Cocina", imagen: "aceite-capullo.jpg", icono: "🍲", precio: 2.25 },
    { id: "aceite-mazola-700-ml", nombre: "Aceite Mazola 700 ml", categoria: "Cocina", imagen: "aceite-mazola-700-ml.jpg", icono: "🍲", precio: 2.50 },
    { id: "aluminio-diapack-25-papel-aluminio", nombre: "Aluminio Diapack 25 (Papel Aluminio)", categoria: "Cocina", imagen: "aluminio-diapack-25-papel-aluminio.jpg", icono: "🍲", precio: 1.15 },
    { id: "arroz-precocido-1lb", nombre: "Arroz precocido 1LB", categoria: "Cocina", imagen: "arroz-precocido-1lb.jpg", icono: "🍲", precio: 0.85 },
    { id: "azucar-blanca-1l", nombre: "Azucar blanca 1L", categoria: "Cocina", imagen: "azucar-blanca-1l.jpg", icono: "🍲", precio: 0.75 },
    { id: "cal-embolsada", nombre: "Cal Embolsada", categoria: "Cocina", imagen: "cal-embolsada.jpg", icono: "🍲", precio: 0.25 },
    { id: "chile-jalisco-2-onz-chile-de-bote", nombre: "Chile Jalisco 2 Onz. (Chile de Bote)", categoria: "Cocina", imagen: "chile-jalisco-2-onz-chile-de-bote.jpg", icono: "🍲", precio: 1.25 },
    { id: "consome-robertoni-pollo", nombre: "Consomé Robertoni Pollo", categoria: "Cocina", imagen: "consome-robertoni-pollo.jpg", icono: "🍲", precio: 0.12 },
    {
        id: "consome-robertoni-pollo-res-libra-botes-grandes",
        nombre: "Consomé Robertoni Pollo / Res Libra (Botes Grandes)",
        categoria: "Cocina",
        imagen: "consome-robertoni-pollo-res-libra-botes-grandes.jpg",
        icono: "🍲",
        variantes: [
            { nombre: "Robertoni Pollo", precio: 1.65 },
            { nombre: "Robertoni Res", precio: 1.65 }
        ]
    },
    { id: "consome-robertoni-res", nombre: "Consomé Robertoni Res", categoria: "Cocina", imagen: "consome-robertoni-res.jpg", icono: "🍲", precio: 0.12 },
    { id: "coscafe", nombre: "Coscafe", categoria: "Cocina", imagen: "coscafe.jpg", icono: "🍲",  variantes: [
            { nombre: "Sobre suelto", precio: 0.10 },
            { nombre: "Caja / Display cerrado (40 un)", precio: 4.00 }
        ]
    },
    { id: "cubitos", nombre: "Cubitos", categoria: "Cocina", imagen: "cubitos.jpg", icono: "🍲", precio: 0.05, presentacion: "6 cubitos por cora" },
    { id: "espagueti", nombre: "espagueti", categoria: "Cocina", imagen: "espagueti.jpg", icono: "🍲", precio: 0.60 },
    {
        id: "fosforos-antorchas",
        nombre: "fosforos antorchas",
        categoria: "Cocina",
        imagen: "fosforos-antorchas.jpg",
        icono: "🍲",
        variantes: [
            { nombre: "paquete fosforos", precio: 0.35 },
            { nombre: "unidad fosforos", precio: 0.05 }
        ]
    },
    { id: "maizena-sabores-surtidas", nombre: "Maizena Sabores Surtidas", categoria: "Cocina", imagen: "maizena-sabores-surtidas.jpg", icono: "🍲", precio: 1.00 },
    {
        id: "mayonesa-mostaza-chef-grandes-350g",
        nombre: "Mayonesa / Mostaza Chef Grandes (350g)",
        categoria: "Cocina",
        imagen: "mayonesa-mostaza-chef-grandes-350g.jpg",
        icono: "🍲",
        variantes: [
            { nombre: "Mayonesa", precio: 2.50 },
            { nombre: "Mostaza", precio: 1.35 }
        ]
    },
    { id: "mostaza-chef-pequena-180g", nombre: "Mostaza Chef Pequeña (180g)", categoria: "Cocina", imagen: "mostaza-chef-pequena-180g.jpg", icono: "🍲", precio: 0.70 },
    { id: "pajilla-termo-dura", nombre: "Pajilla Termo Dura", categoria: "Cocina", imagen: "pajilla-termo-dura.jpg", icono: "🍲", precio: 0.30 },
    { id: "sal", nombre: "Sal", categoria: "Cocina", imagen: "sal.jpg", icono: "🍲", precio: 0.20 },
    { id: "salsita-natura-s-queso-90g", nombre: "Salsita Natura's Queso (90g)", categoria: "Cocina", imagen: "salsita-natura-s-queso-90g.jpg", icono: "🍲", precio: 0.75 },
    { id: "salsitas-naturas", nombre: "Salsita Natura's Ranchera (90g)", categoria: "Cocina", imagen: "salsitas-naturas.jpg", icono: "🍲", precio: 0.75 },
    {
        id: "sardina-verdemar-dulce-y-picante",
        nombre: "Sardina Verdemar (Dulce y Picante)",
        categoria: "Cocina",
        imagen: "sardina-verdemar-dulce-y-picante.jpg",
        icono: "🍲",
        variantes: [
            { nombre: "Sardina dulce", precio: 1.10 },
            { nombre: "Sardina picante", precio: 1.10 }
        ]
    },
    { id: "servilleta-bom-papel", nombre: "Servilleta Bom Papel", categoria: "Cocina", imagen: "servilleta-bom-papel.jpg", icono: "🍲", precio: 0.60 },
    {
        id: "sopa-laky-vaso-camaron-y-pollo",
        nombre: "Sopa Laky bolsa (Camarón y Pollo)",
        categoria: "Cocina",
        imagen: "sopa-laky-vaso-camaron-y-pollo.jpg",
        icono: "🍲",
        variantes: [
            { nombre: "Laky bolsa camaron", precio: 0.60 },
            { nombre: "Laky bolsa pollo", precio: 0.60 }
        ]
    },
    {
        id: "sopa-laky-vaso-camaron-y-pollo-1",
        nombre: "Sopa Laky Vaso (Camarón y Pollo)",
        categoria: "Cocina",
        imagen: "sopa-laky-vaso-camaron-y-pollo-1.jpg",
        icono: "🍲",
        variantes: [
            { nombre: "Laky vaso camaron", precio: 1.00 },
            { nombre: "Laky vaso pollo", precio: 1.00 }
        ]
    },
    { id: "sopa-maggi-55-g", nombre: "Sopa Maggi 55 g", categoria: "Cocina", imagen: "sopa-maggi-55-g.jpg", icono: "🍲", precio: 0.35 },
    { id: "toalla-de-cocina-nube-blanca-papel-toalla", nombre: "Toalla de Cocina Nube Blanca (Papel Toalla)", categoria: "Cocina", imagen: "toalla-de-cocina-nube-blanca-papel-toalla.jpg", icono: "🍲", precio: 1.25 },

    // HIGIENE PERSONAL
    { id: "cepillo-colgate-premier", nombre: "Cepillo Colgate Premier", categoria: "Higiene personal", imagen: "cepillo-colgate-premier.jpg", icono: "🧴", precio: 0.85 },
    { id: "desodorante-lady-speed-stick-sachet", nombre: "Desodorante Lady Speed Stick Sachet", categoria: "Higiene personal", imagen: "desodorante-lady-speed-stick-sachet.jpg", icono: "🧴", precio: 0.25 },
    { id: "desodorante-rexona-roll-on-men-v8", nombre: "Desodorante Rexona Roll-On Men V8", categoria: "Higiene personal", imagen: "desodorante-rexona-roll-on-men-v8.jpg", icono: "🧴", precio: 1.35 },
    { id: "desodorante-speed-stick-xtreme-night-gel", nombre: "Desodorante Speed Stick Xtreme Night Gel", categoria: "Higiene personal", imagen: "desodorante-speed-stick-xtreme-night-gel.jpg", icono: "🧴", precio: 0.25 },
    { id: "gel-ego-attraction", nombre: "Gel Ego Attraction", categoria: "Higiene personal", imagen: "gel-ego-attraction.jpg", icono: "🧴", precio: 1.75 },
    { id: "jabon-de-bano-paquete", nombre: "Jabón de baño paquete", categoria: "Higiene personal", imagen: "jabon-de-bano-paquete.jpg", icono: "🧴", precio: 1.40 },
    { id: "papel-higienico-encanto", nombre: "Papel higienico encanto", categoria: "Higiene personal", imagen: "papel-higienico-encanto.jpg", icono: "🧴", variantes: [
        { nombre: "Paquete 4 rollos", precio: 1.15 },
        { nombre: "Rollo Suelto", precio: 0.35 }
    ] },
    { id: "pasta-dental", nombre: "Pasta dental", categoria: "Higiene personal", imagen: "pasta-dental.jpg", icono: "🧴", precio: 1.25 },
    { id: "shampoo-head-and-shoulders", nombre: "Shampoo Head & Shoulders", categoria: "Higiene personal", imagen: "shampoo-head-and-shoulders.jpg", icono: "🧴", precio: 0.25 },
    { id: "shampoo-pantene", nombre: "Shampoo Pantene", categoria: "Higiene personal", imagen: "shampoo-pantene.jpg", icono: "🧴", precio: 0.25 },
    { id: "toallas-femeninas-fiore", nombre: "Toallas femeninas fiore paquete", categoria: "Higiene personal", imagen: "toallas-femeninas-fiore.jpg", icono: "🧴", precio: 0.75 },
    { id: "toallas-humedas-jappy-klub", nombre: "Toallas Húmedas Jappy Klub", categoria: "Higiene personal", imagen: "toallas-humedas-jappy-klub.jpg", icono: "🧴", precio: 1.30 },
    { id: "toallas-humedas-pom-pom", nombre: "Toallas húmedas pom pom", categoria: "Higiene personal", imagen: "toallas-humedas-pom-pom.jpg", icono: "🧴", precio: 1.50 },
    { id: "toallas-kotex-nocturna-paquete", nombre: "toallas Kotex Nocturna (Paquete", categoria: "Higiene personal", imagen: "toallas-kotex-nocturna-paquete.jpg", icono: "🧴", precio: 1.95 },
    { id: "toallas-saba-6u", nombre: "Toallas saba paquete", categoria: "Higiene personal", imagen: "toallas-saba-6u.jpg", icono: "🧴", precio: 1.80 },

    // LIMPIEZA
    { id: "azistin-desinfectantes-en-bolsa", nombre: "Azistin (Desinfectantes en Bolsa)", categoria: "Limpieza", imagen: "azistin-desinfectantes-en-bolsa.jpg", icono: "🧼", precio: 0.35 },
    { id: "fabuloso-desinfectantes-en-bolsa", nombre: "Fabuloso (Desinfectantes en Bolsa)", categoria: "Limpieza", imagen: "fabuloso-desinfectantes-en-bolsa.jpg", icono: "🧼", precio: 0.35 },
    { id: "fabuloso-citricos-y-frutas-desinfectantes-en-bolsa", nombre: "Fabuloso citricos y frutas (Desinfectantes en Bolsa)", categoria: "Limpieza", imagen: "fabuloso-citricos-y-frutas-desinfectantes-en-bolsa.jpg", icono: "🧼", precio: 0.35 },
    { id: "jabon-de-trastes", nombre: "Jabón de trastes fardo Espumil", categoria: "Limpieza", imagen: "jabon-de-trastes.jpg", icono: "🧼", precio: 1.25 },
    { id: "jabon-max", nombre: "Jabón max", categoria: "Limpieza", imagen: "jabon-max.jpg", icono: "🧼", variantes: [
        { nombre: "Oferta 3 un", precio: 3.75 },
        { nombre: "Unidad", precio: 1.25 }
    ] },
    { id: "magia-blanca", nombre: "Magia blanca", categoria: "Limpieza", imagen: "magia-blanca.jpg", icono: "🧼", precio: 0.25 },
    { id: "mascon-scotch-brite-esponja-traste", nombre: "Mascón Scotch Brite (Esponja Traste)", categoria: "Limpieza", imagen: "mascon-scotch-brite-esponja-traste.jpg", icono: "🧼", precio: 0.40 },
    { id: "maxi-sol-lejia", nombre: "Maxi SOL Lejia", categoria: "Limpieza", imagen: "maxi-sol-lejia.jpg", icono: "🧼", variantes: [
            { nombre: "Bolsita suelta", precio: 0.13 },
            { nombre: "Fardo cerrado (12 un)", precio: 1.25 }
        ]
    },
    { id: "rinso-natural-700g", nombre: "Rinso natural 700g", categoria: "Limpieza", imagen: "rinso-natural-700g.jpg", icono: "🧼", precio: 1.25 },

    // MEDICAMENTOS
    { id: "acetaminofen-500g", nombre: "Acetaminofen 500g", categoria: "Medicamentos", imagen: "acetaminofen-500g.jpg", icono: "💊", precio: 0.10 },
    { id: "alka-ad", nombre: "Alka-AD", categoria: "Medicamentos", imagen: "alka-ad.jpg", icono: "💊", precio: 0.35 },
    { id: "alkaseltzer-normal", nombre: "Alkaseltzer normal", categoria: "Medicamentos", imagen: "alkaseltzer-normal.jpg", icono: "💊", precio: 0.30 },
    { id: "alkaselzer-boost", nombre: "AlkaSelzer boost", categoria: "Medicamentos", imagen: "alkaselzer-boost.jpg", icono: "💊", precio: 0.45 },
    { id: "baykid", nombre: "baykid", categoria: "Medicamentos", imagen: "baykid.jpg", icono: "💊", precio: 0.30 },
    { id: "dorival-en-gel", nombre: "Dorival en gel", categoria: "Medicamentos", imagen: "dorival-en-gel.jpg", icono: "💊", precio: 0.50 },
    { id: "tabcin-antigripal-gel", nombre: "tabcin antigripal gel", categoria: "Medicamentos", imagen: "tabcin-antigripal-gel.jpg", icono: "💊", precio: 0.35 },
    { id: "tabcin-gripe-y-tos-normal", nombre: "tabcin gripe y tos normal", categoria: "Medicamentos", imagen: "tabcin-gripe-y-tos-normal.jpg", icono: "💊", precio: 0.35 },

    // SNACKS
    { id: "boquitas-candy-maiz", nombre: "Boquitas candy maiz", categoria: "Snacks", imagen: "boquitas-candy-maiz.jpg", icono: "🍬", precio: 0.15 },
    { id: "botonetas", nombre: "Botonetas", categoria: "Snacks", imagen: "botonetas.jpg", icono: "🍬", precio: 0.15 },
    { id: "churrito-diana", nombre: "Churrito diana", categoria: "Snacks", imagen: "churrito-diana.jpg", icono: "🍬", precio: 0.15 },
    { id: "elotito-picante", nombre: "Elotito picante", categoria: "Snacks", imagen: "elotito-picante.jpg", icono: "🍬", precio: 0.15 },
    { id: "galleta-wafer-colombina-vainilla", nombre: "Galleta Wafer Colombina Vainilla", categoria: "Snacks", imagen: "galleta-wafer-colombina-vainilla.jpg", icono: "🍬", precio: 0.15 },
    { id: "gustito-super-churro", nombre: "Gustito super churro", categoria: "Snacks", imagen: "gustito-super-churro.jpg", icono: "🍬", precio: 0.15 },
    { id: "jalapeno-diana", nombre: "Jalapeño diana", categoria: "Snacks", imagen: "jalapeno-diana.jpg", icono: "🍬", precio: 0.15 },
    { id: "maiz-chino", nombre: "Maíz chino", categoria: "Snacks", imagen: "maiz-chino.jpg", icono: "🍬", precio: 0.15 },
    { id: "mani-japones", nombre: "Maní japones", categoria: "Snacks", imagen: "mani-japones.jpg", icono: "🍬", precio: 0.15 },
    { id: "nachos", nombre: "Nachos", categoria: "Snacks", imagen: "nachos.jpg", icono: "🍬", precio: 0.15 },
    { id: "pachanga-mix", nombre: "Pachanga mix", categoria: "Snacks", imagen: "pachanga-mix.jpg", icono: "🍬", precio: 0.25 },
    { id: "palito-chile-limon", nombre: "Palito chile limón", categoria: "Snacks", imagen: "palito-chile-limon.jpg", icono: "🍬", precio: 0.15 },
    { id: "palitos", nombre: "Palitos", categoria: "Snacks", imagen: "palitos.jpg", icono: "🍬", precio: 0.15 },
    { id: "taqueritos-queso-funcion", nombre: "Taqueritos queso función", categoria: "Snacks", imagen: "taqueritos-queso-funcion.jpg", icono: "🍬", precio: 0.25 },
    { id: "yucateks", nombre: "Yucatekas", categoria: "Snacks", imagen: "yucateks.jpg", icono: "🍬", precio: 0.25 }
];

let categoriaActiva = "Todos";
let carrito = [];

const dinero = valor => "$" + Number(valor).toFixed(2);

function obtenerVariantes(producto) {
    if (producto.variantes) {
        return producto.variantes;
    }

    return [{
        nombre: producto.presentacion || "",
        precio: producto.precio
    }];
}

/* ==========================================
   CATEGORÍAS
========================================== */

function mostrarCategorias() {
    const contenedor = document.getElementById("categorias");
    contenedor.innerHTML = "";

    categorias.forEach(categoria => {
        const boton = document.createElement("button");
        boton.type = "button";
        boton.className = "boton-categoria";

        if (categoria === categoriaActiva) {
            boton.classList.add("activa");
        }

        boton.textContent = categoria;

        boton.addEventListener("click", () => {
            categoriaActiva = categoria;
            mostrarCategorias();
            mostrarProductos();
        });

        contenedor.appendChild(boton);
    });
}

/* ==========================================
   PRODUCTOS Y BÚSQUEDA
========================================== */

function mostrarProductos() {
    const buscador = document.getElementById("buscador");
    const contenedor = document.getElementById("productos");
    const busqueda = buscador.value.trim().toLowerCase();

    const filtrados = productos.filter(producto => {
        const coincideCategoria =
            categoriaActiva === "Todos" ||
            producto.categoria === categoriaActiva;

        const coincideNombre =
            producto.nombre.toLowerCase().includes(busqueda);

        return coincideCategoria && coincideNombre;
    });

    document.getElementById("titulo-categoria").textContent =
        categoriaActiva === "Todos"
            ? "Todos los productos"
            : categoriaActiva;

    document.getElementById("total-productos").textContent =
        filtrados.length + " productos";

    contenedor.innerHTML = "";

    if (filtrados.length === 0) {
        contenedor.textContent =
            "No encontramos productos con esa búsqueda.";
        return;
    }

    filtrados.forEach(producto => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "producto";

        const icono = document.createElement("div");
        icono.className = "producto-icono";

        // Carga la foto desde la carpeta imagenes.
        const imagen = document.createElement("img");
        imagen.className = "imagen-producto";
        imagen.src = "imagenes/" + producto.imagen;
        imagen.alt = producto.nombre;
        imagen.loading = "lazy";

        // Si todavía no pusiste la foto, muestra un emoji provisional.
        imagen.onerror = () => {
            imagen.remove();
            icono.textContent = producto.icono;
        };

        icono.appendChild(imagen);

        const nombre = document.createElement("h3");
        nombre.textContent = producto.nombre;

        const categoria = document.createElement("small");
        categoria.textContent = producto.categoria;

        const precio = document.createElement("div");
        precio.className = "precio";

        const variantes = obtenerVariantes(producto);
        let varianteSeleccionada = 0;

        const selector = document.createElement("select");
        selector.setAttribute(
            "aria-label",
            "Elegir presentación de " + producto.nombre
        );

        if (variantes.length > 1) {
            variantes.forEach((variante, indice) => {
                const opcion = document.createElement("option");
                opcion.value = String(indice);
                opcion.textContent =
                    variante.nombre + " — " + dinero(variante.precio);

                selector.appendChild(opcion);
            });

            selector.addEventListener("change", () => {
                varianteSeleccionada = Number(selector.value);
                precio.textContent =
                    dinero(variantes[varianteSeleccionada].precio);
            });
        }

        precio.textContent = dinero(variantes[0].precio);

        const boton = document.createElement("button");
        boton.type = "button";
        boton.className = "boton-agregar";
        boton.textContent = "＋ Agregar al carrito";

        boton.addEventListener("click", () => {
            agregarAlCarrito(
                producto,
                variantes[varianteSeleccionada]
            );
        });

        tarjeta.appendChild(icono);
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(categoria);

        if (variantes.length > 1) {
            tarjeta.appendChild(selector);
        } else if (producto.presentacion) {
            const presentacion = document.createElement("small");
            presentacion.textContent = producto.presentacion;
            tarjeta.appendChild(presentacion);
        }

        tarjeta.appendChild(precio);
        tarjeta.appendChild(boton);

        contenedor.appendChild(tarjeta);
    });
}

document.getElementById("buscador")
    .addEventListener("input", mostrarProductos);

/* ==========================================
   CARRITO Y VARIANTES
========================================== */

function agregarAlCarrito(producto, variante) {
    const clave = producto.id + "::" + variante.nombre;
    const existente = carrito.find(item => item.clave === clave);

    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({
            clave: clave,
            id: producto.id,
            nombre: producto.nombre,
            variante: variante.nombre,
            precio: variante.precio,
            cantidad: 1
        });
    }

    mostrarCarrito();
}

function cambiarCantidad(clave, cambio) {
    const item = carrito.find(producto => producto.clave === clave);

    if (!item) return;

    item.cantidad += cambio;

    if (item.cantidad <= 0) {
        carrito = carrito.filter(
            producto => producto.clave !== clave
        );
    }

    mostrarCarrito();
}

function obtenerSubtotal() {
    return carrito.reduce(
        (suma, item) => suma + item.precio * item.cantidad,
        0
    );
}

function obtenerEnvio(subtotal) {
    if (subtotal === 0 || subtotal >= MINIMO_ENVIO_GRATIS) {
        return 0;
    }

    return COSTO_ENVIO;
}

function mostrarCarrito() {
    const lista = document.getElementById("lista-carrito");
    lista.innerHTML = "";

    if (carrito.length === 0) {
        lista.textContent = "Tu carrito está vacío.";
    }

    carrito.forEach(item => {
        const fila = document.createElement("div");
        fila.className = "item-carrito";

        const detalle = document.createElement("div");
        detalle.className = "item-detalle";

        const nombre = document.createElement("strong");
        nombre.textContent = item.nombre;

        const informacion = document.createElement("small");

        const varianteTexto = item.variante
            ? " · " + item.variante
            : "";

        informacion.textContent =
            item.cantidad + " × " + dinero(item.precio) +
            varianteTexto +
            " · Total: " + dinero(item.precio * item.cantidad);

        detalle.appendChild(nombre);
        detalle.appendChild(informacion);

        const controles = document.createElement("div");
        controles.className = "controles-cantidad";

        const menos = document.createElement("button");
        menos.type = "button";
        menos.textContent = "−";
        menos.setAttribute("aria-label", "Quitar una unidad");
        menos.addEventListener("click", () => {
            cambiarCantidad(item.clave, -1);
        });

        const cantidad = document.createElement("span");
        cantidad.textContent = String(item.cantidad);

        const mas = document.createElement("button");
        mas.type = "button";
        mas.textContent = "+";
        mas.setAttribute("aria-label", "Agregar una unidad");
        mas.addEventListener("click", () => {
            cambiarCantidad(item.clave, 1);
        });

        controles.appendChild(menos);
        controles.appendChild(cantidad);
        controles.appendChild(mas);

        fila.appendChild(detalle);
        fila.appendChild(controles);
        lista.appendChild(fila);
    });

    const subtotal = obtenerSubtotal();
    const envio = obtenerEnvio(subtotal);
    const total = subtotal + envio;

    const cantidadProductos = carrito.reduce(
        (suma, item) => suma + item.cantidad,
        0
    );

    document.getElementById("cantidad-carrito").textContent =
        cantidadProductos;

    document.getElementById("subtotal").textContent =
        dinero(subtotal);

    document.getElementById("envio").textContent =
        subtotal > 0 && envio === 0
            ? "Gratis"
            : dinero(envio);

    document.getElementById("total").textContent =
        dinero(total);

    const mensajeEnvio = document.getElementById("mensaje-envio");

    if (subtotal === 0) {
        mensajeEnvio.textContent =
            "Agregá productos para comenzar.";
    } else if (subtotal >= MINIMO_ENVIO_GRATIS) {
        mensajeEnvio.textContent =
            "¡Tu compra cumple el mínimo para envío gratis!";
    } else {
        const falta = MINIMO_ENVIO_GRATIS - subtotal;

        mensajeEnvio.textContent =
            "Agregá " + dinero(falta) +
            " más para obtener envío gratis.";
    }
}

document.getElementById("vaciar-carrito")
    .addEventListener("click", () => {
        carrito = [];
        mostrarCarrito();
    });

document.getElementById("btn-carrito")
    .addEventListener("click", () => {
        document.getElementById("seccion-carrito")
            .scrollIntoView({ behavior: "smooth" });
    });

/* ==========================================
   PEDIDO POR WHATSAPP
========================================== */

document.getElementById("form-pedido")
    .addEventListener("submit", event => {
        event.preventDefault();

        if (carrito.length === 0) {
            alert("Primero agregá productos al carrito.");
            return;
        }

        const nombre =
            document.getElementById("nombre").value.trim();

        const telefono =
            document.getElementById("telefono").value.trim();

        const direccion =
            document.getElementById("direccion").value.trim();

        const mapa =
            document.getElementById("mapa").value.trim();

        const indicaciones =
            document.getElementById("indicaciones").value.trim();

        if (!nombre || !telefono || !direccion) {
            alert("Completá tu nombre, teléfono y dirección.");
            return;
        }

        if (mapa) {
            try {
                const url = new URL(mapa);

                if (!["http:", "https:"].includes(url.protocol)) {
                    throw new Error("Enlace no válido");
                }
            } catch {
                alert("Revisá el enlace de Google Maps.");
                return;
            }
        }

        const subtotal = obtenerSubtotal();
        const envio = obtenerEnvio(subtotal);
        const total = subtotal + envio;

        const lineasProductos = carrito.map(item => {
            const varianteTexto = item.variante
                ? " (" + item.variante + ")"
                : "";

            return "• " + item.nombre + varianteTexto +
                " × " + item.cantidad + ": " +
                dinero(item.precio * item.cantidad);
        });

        const mensaje = [
            "¡Hola! Quiero hacer un pedido en Tienda El Palmital J&J 🛒",
            "",
            "PRODUCTOS:",
            ...lineasProductos,
            "",
            "Subtotal: " + dinero(subtotal),
            "Envío: " + (envio === 0 ? "Gratis" : dinero(envio)),
            "TOTAL ESTIMADO: " + dinero(total),
            "",
            "Nombre: " + nombre,
            "Teléfono: " + telefono,
            "Dirección: " + direccion,
            "Google Maps: " + (mapa || "No proporcionado"),
            "Indicaciones: " + (indicaciones || "Ninguna"),
            "",
            "Por favor, confirmen disponibilidad y entrega."
        ].join("\n");

        const enlace =
            "https://wa.me/" + WHATSAPP_TIENDA +
            "?text=" + encodeURIComponent(mensaje);

        window.open(enlace, "_blank");
    });

/* ==========================================
   INICIAR PÁGINA
========================================== */

mostrarCategorias();
mostrarProductos();
mostrarCarrito();