import categoryData from "../datos/categorias";
const { categorias } = categoryData;
const categoryContainer = document.getElementById("categorias");

categorias.map((categoria) => {
  const newCategory = document.createElement("a");
  const plantilla = `<img
  class="categoria__img"
  src="${categoria.imagenPortada}"
  alt=""
/>
<div class="categoria__datos">
  <p class="categoria__nombre">${categoria.nombre}</p>
  <p class="categoria__numero-fotos">${categoria.numeroFotos} fotos</p>
</div>`;
  newCategory.innerHTML = plantilla;
  newCategory.classList.add("categoria");
  newCategory.href = "#";
  newCategory.dataset.categoria = categoria.id;
  categoryContainer.append(newCategory);
  console.log(newCategory);
});
