(function () {
  const inputElems = document.querySelectorAll("input[name='color']");
  const imgElem = document.querySelector(".card-prod__img");

  for (const iterator of inputElems) {
    iterator.addEventListener("click", () => {
      const srcPath = `./img/tshirts/tshirt_${iterator.value}.png`;

      imgElem.setAttribute("src", srcPath);

      // for (const elem of inputElems) {
      //   if (elem !== iterator) {
      //     elem.classList.remove("filter-menu__item--active");
      //   }
      // }

      // iterator.classList.add("filter-menu__item--active");
    });
  }
})();
