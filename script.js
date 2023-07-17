const imagensGaleria = document.querySelectorAll(".imagens");
const lightbox = document.querySelector(".lightbox");
const lightboxImagens = document.querySelector(".lightbox-imagem");
const fecharLightbox = document.querySelector(".lightbox-fechar");

imagensGaleria.forEach((item) => {
    item.addEventListener("click", () => {
        const imagemURL = item.querySelector(".imagem-galeria").getAttribute("data-src");
        lightboxImagens.setAttribute("src", imagemURL);
        lightbox.style.display = "flex";
    });
});

fecharLightbox.addEventListener("click", () =>{
    lightbox.style.display = "none";
});