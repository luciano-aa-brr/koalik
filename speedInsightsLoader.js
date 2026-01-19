// Este script inyecta automáticamente Speed Insights de Vercel
(function() {
    // 1. Inicialización de la cola de Speed Insights
    window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };

    // 2. Creación dinámica del tag de script
    const script = document.createElement('script');
    script.src = '/_vercel/speed-insights/script.js';
    script.defer = true;

    // 3. Insertarlo al final del body
    document.body.appendChild(script);
})();