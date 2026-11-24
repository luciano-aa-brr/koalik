// Base de datos de acreditaciones y certificaciones
// Para agregar una nueva, solo añade un objeto al arreglo manteniendo esta estructura
const credenciales = [
    {
        titulo: "Programación Avanzada",
        emisor: "Instituto Profesional Santo Tomás",
        fecha: "17 abr 2026",
        categoria: "Academico",
        etiqueta: "Formación Académica",
        horas: "270 horas pedagógicas",
        descripcion: "Certificación académica oficial de la carrera Analista Programador. Desarrollo de software estructurado y orientado a objetos.",
        archivo: "doc/certificadoProgramacionAvanzada.pdf",
        codigo: "Folio 899802 · Cód: U5GTRSJO"
    },
    {
        titulo: "Diseño Básico de Software",
        emisor: "Instituto Profesional Santo Tomás",
        fecha: "07 may 2025",
        categoria: "Academico",
        etiqueta: "Formación Académica",
        horas: "162 horas pedagógicas",
        descripcion: "Certificación académica en levantamiento de requerimientos, modelamiento y arquitectura base de sistemas.",
        archivo: "doc/certificadoDiseñoBasicoDeSoftware.pdf",
        codigo: "Folio 899804 · Cód: MSUE0F5G"
    },
    {
        titulo: "Hacking Ético: de 0 a Hackear Aplicaciones",
        emisor: "BIG school",
        fecha: "23 oct 2026",
        categoria: "Seguridad",
        etiqueta: "Ciberseguridad",
        horas: "6 horas lectivas",
        descripcion: "Jornadas intensivas de análisis de vulnerabilidades, pruebas de penetración y seguridad en aplicaciones web.",
        archivo: null,
        codigo: "Validación BIG school"
    },
    {
        titulo: "Introduction to Cybersecurity",
        emisor: "Cisco Networking Academy",
        fecha: "25 jun 2024",
        categoria: "Seguridad",
        etiqueta: "Ciberseguridad",
        horas: "Insignia Verificada",
        descripcion: "Fundamentos de defensa perimetral, vectores de ataque, privacidad de datos y mitigación de amenazas.",
        archivo: null,
        codigo: "Cisco Verified Badge"
    },
    {
        titulo: "Networking Devices and Initial Configuration",
        emisor: "Cisco Networking Academy",
        fecha: "06 feb 2025",
        categoria: "Redes",
        etiqueta: "Redes & Infraestructura",
        horas: "22 horas",
        descripcion: "Configuración inicial, administración y conectividad segura de switches y routers en entornos empresariales.",
        archivo: null,
        codigo: "Cisco Verified Badge"
    },
    {
        titulo: "Networking Basics",
        emisor: "Cisco Networking Academy",
        fecha: "17 ene 2025",
        categoria: "Redes",
        etiqueta: "Redes & Infraestructura",
        horas: "22 horas",
        descripcion: "Modelos OSI/TCP-IP, protocolos de comunicación y direccionamiento IPv4/IPv6.",
        archivo: null,
        codigo: "Cisco Verified Badge"
    },
    {
        titulo: "IT Essentials: PC Hardware and Software",
        emisor: "Cisco Networking Academy",
        fecha: "05 jul 2024",
        categoria: "Redes",
        etiqueta: "Redes & Infraestructura",
        horas: "Insignia Verificada",
        descripcion: "Hardware computacional, arquitectura de sistemas operativos, diagnóstico y soporte técnico integral.",
        archivo: null,
        codigo: "Cisco Verified Badge"
    },
    {
        titulo: "Iniciación al Desarrollo con IA",
        emisor: "BIG school (Brais Moure & Romuald Fons)",
        fecha: "25 dic 2025",
        categoria: "Desarrollo",
        etiqueta: "Desarrollo & IA",
        horas: "6 horas",
        descripcion: "Integración de modelos de lenguaje e inteligencia artificial generativa en flujos de desarrollo moderno.",
        archivo: "doc/cursoIniciacionAlDesarrolloConIA.pdf",
        codigo: "Certificado Oficial"
    },
    {
        titulo: "JavaScript 1",
        emisor: "BiblioRedes / SERPAT",
        fecha: "14 sep 2025",
        categoria: "Desarrollo",
        etiqueta: "Desarrollo & IA",
        horas: "15 horas (Nota: 6,8)",
        descripcion: "Programación del lado del cliente, manipulación del DOM y lógica interactiva web.",
        archivo: "doc/javaScript1.pdf",
        codigo: "Puntaje: 96,67%"
    },
    {
        titulo: "Fundamentos de Python 1 & 2",
        emisor: "Cisco Networking Academy / Python Institute",
        fecha: "Junio 2024",
        categoria: "Desarrollo",
        etiqueta: "Desarrollo & IA",
        horas: "70 horas totales",
        descripcion: "Programación procedural y orientada a objetos, estructuras de datos y desarrollo de scripts en Python.",
        archivo: null,
        codigo: "Python Essentials 1 & 2"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid-certificaciones');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const countTodas = document.getElementById('count-todas');
    const modal = document.getElementById('cert-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');

    if (countTodas) {
        countTodas.textContent = credenciales.length;
    }

    function renderCards(filtro = 'Todas') {
        if (!grid) return;
        grid.innerHTML = '';

        const filtradas = filtro === 'Todas'
            ? credenciales
            : credenciales.filter(item => item.categoria === filtro);

        if (filtradas.length === 0) {
            grid.innerHTML = `
                <div class="col-span-full text-center py-12 text-gray-400 text-sm font-medium">
                    No hay certificaciones registradas en esta categoría por el momento.
                </div>
            `;
            return;
        }

        filtradas.forEach((item, index) => {
            const card = document.createElement('div');
            card.style.animationDelay = `${index * 50}ms`;
            card.className = "animate-card bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#BFA2DB]/40 transition-all duration-300 flex flex-col justify-between cursor-pointer group";

            card.innerHTML = `
                <div>
                    <div class="flex items-center justify-between gap-2 mb-5">
                        <span class="text-[10px] font-black bg-[#BFA2DB]/15 text-[#BFA2DB] px-3 py-1 rounded-full uppercase tracking-widest">
                            ${item.emisor}
                        </span>
                        <span class="text-xs text-gray-400 font-bold">${item.fecha}</span>
                    </div>

                    <h3 class="text-xl font-bold text-[#2B2B2B] group-hover:text-[#BFA2DB] transition-colors mb-3 leading-snug">
                        ${item.titulo}
                    </h3>

                    <p class="text-gray-500 text-sm leading-relaxed mb-6">
                        ${item.descripcion}
                    </p>
                </div>

                <div class="pt-5 border-t border-gray-50 flex items-center justify-between">
                    <span class="text-[10px] text-gray-400 font-bold uppercase tracking-wider">${item.horas}</span>
                    <span class="px-4 py-2 rounded-xl bg-[#2B2B2B] group-hover:bg-[#BFA2DB] text-white text-xs font-bold transition-colors">
                        ${item.archivo ? 'Ver PDF' : 'Detalles'}
                    </span>
                </div>
            `;

            card.addEventListener('click', () => abrirModal(item));
            grid.appendChild(card);
        });
    }

    // Manejo de pestañas de filtrado
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => {
                b.classList.remove('bg-[#2B2B2B]', 'text-white', 'shadow-md');
                b.classList.add('bg-white', 'text-[#2B2B2B]', 'border', 'border-gray-200');
            });
            btn.classList.add('bg-[#2B2B2B]', 'text-white', 'shadow-md');
            btn.classList.remove('bg-white', 'text-[#2B2B2B]', 'border', 'border-gray-200');

            renderCards(btn.dataset.filter);
        });
    });

    // Control del Modal
    function abrirModal(item) {
        document.getElementById('modal-badge').textContent = item.etiqueta;
        document.getElementById('modal-fecha').textContent = item.fecha;
        document.getElementById('modal-titulo').textContent = item.titulo;
        document.getElementById('modal-emisor').textContent = item.emisor;
        document.getElementById('modal-descripcion').textContent = item.descripcion;
        document.getElementById('modal-horas').textContent = `${item.horas} · ${item.codigo}`;

        const accionDiv = document.getElementById('modal-accion');
        if (item.archivo) {
            accionDiv.innerHTML = `<a href="${item.archivo}" target="_blank" class="px-5 py-2.5 rounded-xl bg-[#BFA2DB] hover:bg-[#a889c7] text-white text-xs font-bold shadow-md transition-colors">Abrir Documento PDF ↗</a>`;
        } else {
            accionDiv.innerHTML = `<span class="px-3.5 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">✓ Credencial Verificada</span>`;
        }

        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }

    function cerrarModal() {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', cerrarModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) cerrarModal();
        });
    }

    // Renderizado inicial
    renderCards();
});