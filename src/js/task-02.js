const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");

const createItems = ingredients.map((ingredient) => {
  const el = document.createElement("li");
  // console.log(el);
  el.textContent = ingredient;
  el.classList.add("item");
  return el;
});
ingredientsList.append(...createItems);
