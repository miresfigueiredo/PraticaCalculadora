let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');

let realTimeScreenValue = [''];

clearbtn.addEventListener("click", () => {
    realTimeScreenValue = [''];
    updateScreen();
    resetStyles();
    
});

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (!btn.id.match('erase')) {
           if (btn.value === '.') {
                if (realTimeScreenValue[realTimeScreenValue.length - 1].includes('.')) {
                    return;
                }
           }
        
            realTimeScreenValuePush(btn.value);
            updateScreen();
        }
        
        if (btn.id ==='clear') {
            realTimeScreenValue = [''];
            updateScreen();
        
        }
        
        if (btn.id === 'evaluate') {
            evaluateExpression();
        } 
    });
});

function realTimeScreenValuePush(value) {
    realTimeScreenValue[realTimeScreenValue.length -1] += value;
}

function updateScreen() {
    currentInput.innerHTML = realTimeScreenValue.join('');
}

function evaluateExpression() {
    let resultado = 0;
    try {
        resultado = eval(realTimeScreenValue.join(''));
        realTimeScreenValue = [resultado.toString()];
        currentInput.innerHTML = resultado;
    } catch (error) {
        resultado = 'Erro';
    }
    answerScreen.innerHTML = '';
}

function resetStyles() {
    currentInput.className = 'currentInput';
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = "rgba(150, 150, 150, 0.87)";
}