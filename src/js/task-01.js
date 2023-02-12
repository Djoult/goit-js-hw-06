const number = document.querySelectorAll(".item");
console.log(`Number of categories: ${number.length}`);
for (let i = 0; i < number.length; i++) {
  const category = number[i].querySelector("h2");
  const elementCount = category.nextElementSibling.children.length;
  console.log(`Category: ${category.textContent}`);
  console.log(`Elements: ${elementCount}`);
}
