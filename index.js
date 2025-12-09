// calc
const btn = document.getElementById('btn');
let result = document.getElementById('result');

btn.addEventListener('click', function () {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const op = document.getElementById('op');
    const a = Number(num1.value);
    const b = Number(num2.value);
    const operation = op.value.trim();

    switch (operation) {
        case '+':
            result.textContent = `Результат: ${a + b}`;
            break;
        case '-':
            result.textContent = `Результат: ${a - b}`;
            break;
        case '*':
            result.textContent = `Результат: ${a * b}`;
            break;
        case '**':
            result.textContent = `Результат: ${a ** b}`;
            break;
        case '/':
            if (b !== 0) {
                result.textContent = `Результат: ${a / b}`;
            }
            else {
                result.textContent = 'Error';
            }
            break;
        default:
            result.textContent = 'Error';
    }
});
// Max-min
const btn1 = document.getElementById('btn1');
let result1 = document.getElementById('result1');
btn1.addEventListener('click', function () {
    const input1 = Number(document.getElementById('input1').value);
    const input2 = Number(document.getElementById('input2').value);
    if (input1 > input2) {
        result1.textContent = `${input1} більше`;
    }
    else if (input1 < input2) {
        result1.textContent = `${input2} більше`;
    }
    else if (input1 === input2) {
        result1.textContent = `${input1} рівний ${input2}`;
    }
    else {
        result1.textContent = 'Error';
    }

})