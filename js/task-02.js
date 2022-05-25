const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector('#ingredients');

const list = []

for(let ingredient of ingredients){
  const  item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');

  list.push(item);

}

ingredientsList.append(...list);


