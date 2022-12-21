const inputRef = document.querySelector(`#name-input`)
const spanRef = document.querySelector(`#name-output`)
inputRef.addEventListener(`input`,(evt)=>{
const normolizeValue= evt.target.value.trim()
spanRef.textContent=normolizeValue==="" ? "Anonymous" : normolizeValue
})