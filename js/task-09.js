function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnRef = document.querySelector(`.change-color`)
const spanRef = document.querySelector(`.color`)
btnRef.addEventListener(`click`,()=>{
  const randomColor=getRandomHexColor()
  console.log(randomColor)
  document.body.style.background=randomColor
  spanRef.textContent = randomColor
})