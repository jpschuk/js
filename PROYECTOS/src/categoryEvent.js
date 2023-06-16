import dataFotos from "../datos/fotos";

const categoryContainer = document.getElementById("categorias");
const galery = document.getElementById("galeria");
categoryContainer.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.closest("a")) {
    galery.classList.add("galeria--active");
    document.body.style.overflow = "hidden";
    const categoriaActiva = e.target.dataset.categoria;
    const imgs = dataFotos.fotos[categoriaActiva];

    imgs.map((img) => {
      const slide = `<a
      href="#"
      class="galeria__carousel-slide"
    >
      <img
        class="galeria__carousel-image"
        src=${img.src}
        alt=""
      />
    </a>`;
      galery.querySelector(".galeria__carousel-slides").innerHTML += slide;
    });
  }
  galery
    .querySelector(".galeria__carousel-slides")
    .classList.add("galeria__carousel-slides -active");
});
