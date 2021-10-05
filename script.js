function soma(a, b) {
    return a + b;
}
function subtracao(a, b) {
    console.log(typeof b);
    return a - b;
}
function mult(a, b) {
    return a * b;
}
function divisao(a, b) {
    return a / b;
}
function arrendodar(a) {
    return Math.round(a);
}
function porcentagem(a, b) {
    return (a * b) / 100;
}
var operation;
var numbers = [];

function selecionaOp() {
    switch (operation) {
        case '+':
            return soma(numbers[0], numbers[1]);
        case '-':
            return subtracao(numbers[0], numbers[1]);
        case 'x':
            return mult(numbers[0], numbers[1]);
        case '/':
            return divisao(numbers[0], numbers[1]);
        case '%':
            return porcentagem(numbers[0], numbers[1]);
    }
}
var tela = "0";
function insertDisplay(text) {
    const display = document.getElementById('visor');
    let result;
    if (tela == "0" && text != 'AC') {
        document.getElementById('visor').innerText = text;
    }
    else
        switch (text) {
            case 'AC':
                display.innerText = 0;
                numbers = [];
                break;
            case '±':
                result = arrendodar(parseFloat(tela));
                display.innerText = result.toString();
                break;
            case '%':
                numbers.push(parseFloat(tela));
                operation = '%';
                display.innerText += text;
                operation = text;
                break;
            case '=':
                let aux = tela.split(operation);
                numbers.push(parseFloat(aux[1]));
                result = selecionaOp();
                display.innerText = result;
                numbers = [];
                break;
            case '+':
            case '-':
            case 'x':
            case '/':
                numbers.push(parseFloat(tela));
                operation = text;
            default:
                display.innerText += text;
        }
    tela = document.getElementById('visor').innerText;
}