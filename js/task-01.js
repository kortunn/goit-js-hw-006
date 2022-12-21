const listRef = document.querySelector(`#categories`)
console.log(`Number of categories: ${listRef.children.length}`)

const itemsList = [...listRef.children]
itemsList.forEach((item)=>{const title = item.querySelector(`h2`);
 console.log(`Category: ${title.textContent}`)
const elemAll = item.querySelectorAll(`li`)
console.log(`Elements: ${elemAll.length}`)
})
