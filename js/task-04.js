const decrementRef =document.querySelector(`[data-action="decrement"]`)
const valueRef =document.querySelector(`#value`)
const incrementRef =document.querySelector(`[data-action="increment"]`)
let counterValue = 0
incrementRef.addEventListener(`click`,()=>{
    counterValue +=1
    valueRef.textContent= counterValue
})
decrementRef.addEventListener(`click`,()=>{
    counterValue -=1
    valueRef.textContent = counterValue
})