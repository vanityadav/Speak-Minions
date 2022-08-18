let buttonClicked = document.getElementsByClassName('button')[0]
buttonClicked.addEventListener("click", translate)

function translate() {
let newText = document.getElementsByClassName('translated-text')[0]
    
fetch(`https://api.funtranslations.com/translate/minion.json?text=
    ${document.getElementsByClassName('input')[0].value}`)
.then(value => value.json())
.then(newvalue => newText.innerText = newvalue.contents.translated)
console.log(newText.value)
}


