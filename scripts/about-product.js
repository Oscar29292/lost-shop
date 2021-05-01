(function () {
  const inputElems = document.querySelectorAll(".filter-menu__item");

  for (const iterator of inputElems) {
    iterator.addEventListener("click", () => {
      for (const elem of inputElems) {
        if (elem !== iterator) {
          elem.classList.remove("filter-menu__item--active");
        }
      }
      iterator.classList.add("filter-menu__item--active");
    });
  }
})();

// (function () {
//   const buttons = document.getElementsByClassName("filter-menu__item");

//   for (const el of buttons) {
//     el.addEventListener("click", () => {
//     	for (const elem of buttons) {
//     		elem.classList.remove("filter-menu__item--active");
//       }
//       el.classList.add("filter-menu__item--active");
//     });
//   }
// })();
