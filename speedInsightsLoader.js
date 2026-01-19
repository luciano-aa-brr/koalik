(function() {
    // 1. Inicialización de Vercel Speed Insights
    window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };

    // 2. Creación dinámica del tag
    const script = document.createElement('script');
    script.src = '/_vercel/speed-insights/script.js';
    script.defer = true;

    // 3. Inserción al final del body
    document.body.appendChild(script);
    
    console.log("KoaLink: Speed Insights cargado.");
})();