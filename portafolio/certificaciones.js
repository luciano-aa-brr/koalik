// Listado centralizado de cursos y certificaciones
const listadoCredenciales = [
    {
        titulo: "Hacking Ético: de 0 a Hackear Aplicaciones",
        entidad: "BIG school",
        fecha: "23 oct 2026",
        descripcion: "Jornadas intensivas de análisis de vulnerabilidades y seguridad en aplicaciones web (6 horas lectivas).",
        categoria: "seguridad"
    },
    {
        titulo: "Introduction to Cybersecurity",
        entidad: "Cisco Networking Academy",
        fecha: "25 jun 2024",
        descripcion: "Fundamentos de defensa perimetral, vectores de ataque, privacidad de datos y mitigación de amenazas.",
        categoria: "seguridad"
    },
    {
        titulo: "Networking Devices and Initial Configuration",
        entidad: "Cisco",
        fecha: "06 feb 2025",
        descripcion: "Configuración inicial y conectividad de switches y routers.",
        categoria: "redes"
    },
    {
        titulo: "Networking Basics",
        entidad: "Cisco",
        fecha: "17 ene 2025",
        descripcion: "Modelos OSI/TCP-IP, protocolos y direccionamiento IPv4/IPv6.",
        categoria: "redes"
    },
    {
        titulo: "IT Essentials",
        entidad: "Cisco",
        fecha: "05 jul 2024",
        descripcion: "Hardware computacional, sistemas operativos y soporte técnico.",
        categoria: "redes"
    },
    {
        titulo: "AI Skills Fest 2026",
        entidad: "Microsoft",
        fecha: "19 jun 2026",
        descripcion: "Fundamentos y aplicaciones prácticas de Inteligencia Artificial generativa.",
        categoria: "desarrollo"
    },
    {
        titulo: "Python Essentials 1",
        entidad: "Cisco / OpenEDG",
        fecha: "31 may 2024",
        descripcion: "Sintaxis elemental, estructuras de datos, control de flujo y lógica algorítmica.",
        categoria: "desarrollo"
    },
    {
        titulo: "Python Essentials 2",
        entidad: "Cisco / OpenEDG",
        fecha: "10 jun 2024",
        descripcion: "Programación orientada a objetos (POO), manejo de excepciones y módulos.",
        categoria: "desarrollo"
    }
];

// Función para generar la tarjeta HTML con Tailwind CSS
function crearTarjeta(item) {
    return `
        <article class="bg-white p-5 rounded-2xl border border-[#D9D9D9] hover:border-[#BFA2DB] transition shadow-sm flex flex-col justify-between">
            <div>
                <div class="flex items-center justify-between text-xs font-semibold text-[#4A444A] mb-3">
                    <span class="bg-[#FAFAFA] border border-[#D9D9D9] px-2 py-0.5 rounded">${item.entidad}</span>
                    <span>${item.fecha}</span>
                </div>
                <h4 class="font-bold text-[#2B2B2B] text-sm leading-snug mb-2">${item.titulo}</h4>
                <p class="text-xs text-[#4A444A] leading-relaxed">${item.descripcion}</p>
            </div>
        </article>
    `;
}

// Inyección dinámica al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
    const contenedorSeguridad = document.getElementById("contenedorSeguridad");
    const contenedorRedes = document.getElementById("contenedorRedes");
    const contenedorDesarrollo = document.getElementById("contenedorDesarrollo");

    listadoCredenciales.forEach(item => {
        const tarjetaHtml = crearTarjeta(item);
        if (item.categoria === "seguridad" && contenedorSeguridad) {
            contenedorSeguridad.innerHTML += tarjetaHtml;
        } else if (item.categoria === "redes" && contenedorRedes) {
            contenedorRedes.innerHTML += tarjetaHtml;
        } else if (item.categoria === "desarrollo" && contenedorDesarrollo) {
            contenedorDesarrollo.innerHTML += tarjetaHtml;
        }
    });
});