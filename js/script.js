const btnBackToTop = document.getElementById("btnBackToTop");

window.onscroll = function() {
    // Si el usuario baja más de 300px, mostramos el botón
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnBackToTop.classList.add("show");
    } else {
        btnBackToTop.classList.remove("show");
    }
};