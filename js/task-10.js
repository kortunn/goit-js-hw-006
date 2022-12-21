function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputRef = document.querySelector(`[type="number"]`)
const createRef = document.querySelector(`[data-create]`)
const destroyRef = document.querySelector(`[data-destroy]`)
const bosRef = document.querySelector(`#boxes`)

createRef.addEventListener(`click`,()=>{
  const itemsList =[]
  for (let i = 0; i < inputRef.value; i++) {
    const element = document.createElement(`div`);
    element.style.width = `${30 + i*10}px`
    element.style.height = `${30 + i*10}px`
    element.style.background = getRandomHexColor()
    itemsList.push(element)

  }
  inputRef.value = ''
  boxes.append(...itemsList)
})
destroyRef.addEventListener(`click`,()=>{
  bosRef.innerHTML = ""
})