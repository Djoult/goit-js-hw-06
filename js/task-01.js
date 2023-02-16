const itemsList = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsList.length}`);
itemsList.forEach((item) => {
  const category = item.firstElementChild;
  const elementCount = item.lastElementChild.children.length;
  console.log(`Category: ${category.textContent}`);
  console.log(`Elements: ${elementCount}`);
});
