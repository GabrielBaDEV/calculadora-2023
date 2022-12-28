let runningTotal = 0;
let valor = "0";
let previousOperator;

const tela = document.querySelector('.tela');

function buttonClick(value){
    if(isNaN(value)){
        puxSimbolo(value);
    }else{
        puxNumero(value)
    }
    tela.innerText = valor;
}

function puxSimbolo(simbolo){
    switch(simbolo){
        case 'C':
            valor = '0';
            runningTotal = 0;
            break;
        case '=':
            if(previousOperator === null){
                return
            }
            flushOperation(parseInt(valor));
            previousOperator = null;
            valor = runningTotal;
            runningTotal = 0;
            break;
        case '←':
            if(valor.length ===1){
                valor = '0';
            }else{
                valor = valor.substring(0, valor.length - 1);
            }
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            puxConta(simbolo)
            break;
    }
}

function puxConta(simbolo){
    if(valor === '0'){
        return;
    }

    const intValor = parseInt(valor);

    if(runningTotal === 0){
        runningTotal = intValor;
    }else{
        flushOperation(intValor);
    }
    previousOperator = simbolo;
    valor = '0';
}

function flushOperation(intValor){
    if(previousOperator === '+'){
        runningTotal += intValor;
    }else if(previousOperator === '−'){
        runningTotal -= intValor;
    }else if(previousOperator === '×'){
        runningTotal *= intValor;
    }else if(previousOperator === '÷'){
        runningTotal /= intValor;
    }
}

function puxNumero(numberString){
    if(valor === "0"){
        valor = numberString;
    }else{ 
        valor += numberString;
    }
}

function init(){
    document.querySelector('.calc-botaos').
    addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })
}

init();
