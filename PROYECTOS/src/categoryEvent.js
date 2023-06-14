const categoryContainer = document.getElementById("categorias");
const galery = document.getElementById("galeria");
categoryContainer.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.closest("a")) {
    galery.classList.add("galeria--active");
    document.body.style.overflow = "hidden";
  } tico asd
});
