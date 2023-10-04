window.addEventListener('load', () => {
    // Quando a página estiver totalmente carregada, oculte a animação de carregamento
    const loaderWrapper = document.querySelector('.loader-wrapper');
    loaderWrapper.style.display = 'none';
});


document.addEventListener("DOMContentLoaded", function () {
    const enterNowButton = document.getElementById("enter-now");

    enterNowButton.addEventListener("click", function (event) {
        event.preventDefault();
        const gruposSection = document.getElementById("grupos");
        
        // Calcula a posição da seção em relação à parte superior da página
        const offset = gruposSection.getBoundingClientRect().top;
        
        // Animação de scroll suave
        window.scrollBy({
            top: offset,
            behavior: "smooth"
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const enterNowButton = document.getElementById("inicio-button");

    enterNowButton.addEventListener("click", function (event) {
        event.preventDefault();
        const gruposSection = document.getElementById("inicio");
        
        // Calcula a posição da seção em relação à parte superior da página
        const offset = gruposSection.getBoundingClientRect().top;
        
        // Animação de scroll suave
        window.scrollBy({
            top: offset,
            behavior: "smooth"
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const enterNowButton = document.getElementById("about");

    enterNowButton.addEventListener("click", function (event) {
        event.preventDefault();
        const gruposSection = document.getElementById("info");
        
        // Calcula a posição da seção em relação à parte superior da página
        const offset = gruposSection.getBoundingClientRect().top;
        
        // Animação de scroll suave
        window.scrollBy({
            top: offset,
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const enterNowButton = document.getElementById("membros-time");

    enterNowButton.addEventListener("click", function (event) {
        event.preventDefault();
        const gruposSection = document.getElementById("members");
        
        // Calcula a posição da seção em relação à parte superior da página
        const offset = gruposSection.getBoundingClientRect().top;
        
        // Animação de scroll suave
        window.scrollBy({
            top: offset,
            behavior: "smooth"
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const enterNowButton = document.getElementById("contacts");

    enterNowButton.addEventListener("click", function (event) {
        event.preventDefault();
        const gruposSection = document.getElementById("members");
        
        // Calcula a posição da seção em relação à parte superior da página
        const offset = gruposSection.getBoundingClientRect().top;
        
        // Animação de scroll suave
        window.scrollBy({
            top: offset,
            behavior: "smooth"
        });
    });
});


