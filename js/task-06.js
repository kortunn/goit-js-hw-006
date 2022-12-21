const inputRef= document.querySelector(`#validation-input`)

inputRef.addEventListener(`blur`,(evt)=>{
console.log(evt.target.value.length)
console.log(evt.target.dataset.length)
const inputLength= evt.target.value.length
const requiredLength =Number(evt.target.dataset.length)
if(inputLength === requiredLength){
    evt.target.classList.add(`valid`)
    evt.target.classList.remove(`invalid`)
}else{
    evt.target.classList.add(`invalid`)
    evt.target.classList.remove(`valid`)
}
})
