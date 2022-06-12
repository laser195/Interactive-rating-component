const chose = document.querySelectorAll('.rate')
const answer = document.getElementById('text')
const oldText = document.getElementById('main')
const click = document.querySelector('input')
const yourSelect = document.getElementById('seletion')




const tryTo = () => {
    chose.forEach(element => {
        element.addEventListener('click',() =>{
            element.style.backgroundColor = 'red'
            yourSelect.textContent = `Your choise is ${element.innerText} `


        })
    })
}  

const change = () => {
    if(yourSelect.textContent != ``){
        click.setAttribute('class','hide')
        oldText.setAttribute('class','hide')
        answer.removeAttribute('class')
    }else{
        alert('give us rate to submit')
    }
    
}


 click.addEventListener('click', change)
tryTo()

