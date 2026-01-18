(function() {
    // --- 1. CONFIGURACIÓN ---
    const GA_ID = 'G-7421VFEHYL'; 
    // --- 2. VERCEL SPEED INSIGHTS ---
    window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
    const siScript = document.createElement('script');
    siScript.src = '/_vercel/speed-insights/script.js';
    siScript.defer = true;
    document.body.appendChild(siScript);

    // --- 3. GOOGLE ANALYTICS (GA4) ---
    // Inyectar el script principal de Google
    const gaScript = document.createElement('script');
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    gaScript.async = true;
    document.head.appendChild(gaScript);

    // Inicializar la capa de datos (DataLayer)
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    window.gtag = gtag; // Hacerlo disponible globalmente
    
    gtag('js', new Date());
    gtag('config', GA_ID);
    
    console.log("🚀 KoaLink Metrics: Speed Insights & GA4 cargados correctamente.");
})();