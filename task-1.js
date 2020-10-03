let categoriesList = document.querySelector('#categories');
console.log(`В списке ${categoriesList.children.length} категории.`);

let categoriesItem = document.querySelectorAll('.item');
categoriesItem.forEach((item) => {
    console.log(`Категорія: ${item.children[0].textContent}`);
    console.log(`Количество: ${item.children[1].children.length}`);
});