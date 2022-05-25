const categories = document.querySelector('#categories');

const categoriesList = categories.querySelectorAll('.item')




console.log(`Number of categories: ${categoriesList.length}`);
console.log('\n');

categoriesList.forEach(category => {
    const categoryTitle = category.querySelector('h2');
    const categoryElements = category.querySelectorAll('li');

    console.log(`Category: ${categoryTitle.textContent}`);
    console.log(`Elements: ${categoryElements.length}`);
    console.log('\n');

})