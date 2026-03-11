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
// Дискримінант
function submit(){
    let a=parseFloat(document.getElementById("a").value);
    let b=parseFloat(document.getElementById("b").value);
    let c=parseFloat(document.getElementById("c").value);
    let result2=document.getElementById("result2");
    if(isNaN(a)||isNaN(b)||isNaN(c)){
        result2.textContent="Error";
        return;
    }
    else{
        let D=b*b-4*a*c;
        if(D>0){
        let x1=(-b+Math.sqrt(D))/(2*a);
        let x2=(-b-Math.sqrt(D))/(2*a);
        result2.textContent=` Дискримінант ${D}, корені x1=${x1.toFixed(2)}, x2=${x2.toFixed(2)}`;

        }
        else if(D===0){
            let x=-b/(2*a);
            result2.textContent=` Дискримінант ${D}, корінь x=${x.toFixed(2)}`;
        }
        else{
            result2.textContent=` Дискримінант ${D}, дійсних коренів немає`;
        }
    }
}

