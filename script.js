var canvas = document.querySelector('.screen')

function insert(num){
    if(canvas.value && num != 'clear'){
        canvas.value = canvas.value + num
        canvas.innerHTML = canvas.value
    }
    else if(num == 'clear'){
        canvas.value = ''
        canvas.innerHTML = canvas.value
    }
    else{
        canvas.value = num
        canvas.innerHTML = canvas.value
    }
}

function equal(){
    var exp = canvas.value
    if(exp){
        canvas.innerHTML = eval(exp)
    }
}