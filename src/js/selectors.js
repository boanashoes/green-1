(() => {
  const selectors_elements = document.getElementsByClassName(
    "product__selector__e"
  );
  for (const selector_element of selectors_elements) {
    selector_element.onclick = function () {
      for (const sibling of this.parentElement.children) {
        sibling.classList.remove("product__selector__e--selected");
      }
      this.classList.add("product__selector__e--selected");
    };
  }
})();
