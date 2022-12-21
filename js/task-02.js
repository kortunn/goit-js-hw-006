const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listRef= document.querySelector(`#ingredients`)
const itemsList = ingredients.map((elem)=>{
  const item = document.createElement(`li`)
  item.textContent = elem
  item.classList.add(`item`)
  return item
})
listRef.append(...itemsList)