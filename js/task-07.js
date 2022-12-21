const inputRef= document.querySelector(`#font-size-control`)
const spanRef=document.querySelector(`#text`)
inputRef.addEventListener(`input`,(evt)=>{
    
    spanRef.style.fontSize =`${evt.target.value}px`
})