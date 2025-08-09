// Botón para visitar la página oficial
document.getElementById('btnVerMas').addEventListener('click', function() {
    window.location.href = 'https://greenkeymexico.org/';
});

// Botón para abrir el PDF en una nueva pestaña
document.getElementById('btnVerPDF').addEventListener('click', function() {
    window.open('docs/greenkey-info.pdf', '_blank');
});

