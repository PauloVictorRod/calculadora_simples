 function insertDisplay(data){

document.querySelector('#display').value +=data

}

function clean(){

document.querySelector('#display').value = ''

}


function backspace(){

const display = document.querySelector('#display')
display.value = display.value.slice(0 ,-1)

}

function calcular(){

const display = document.querySelector('#display')

try{
 display.value = eval(display.value)

}

catch{
console.log("operação inválida.")

}

}