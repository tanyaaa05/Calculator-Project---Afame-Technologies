// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let firstOperand = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                operator = '';
                firstOperand = '';
                display.innerText = '0';
            } else if (value === '=') {
                if (operator && firstOperand !== '') {
                    currentInput = calculate(firstOperand, currentInput, operator);
                    display.innerText = currentInput;
                    firstOperand = '';
                    operator = '';
                }
            } else if (this.classList.contains('operator')) {
                if (currentInput === '') return;
                if (firstOperand === '') {
                    firstOperand = currentInput;
                } else if (operator) {
                    firstOperand = calculate(firstOperand, currentInput, operator);
                    display.innerText = firstOperand;
                }
                operator = value;
                currentInput = '';
            } else {
                currentInput += value;
                display.innerText = currentInput;
            }
        });
    });

    function calculate(a, b, op) {
        a = parseFloat(a);
        b = parseFloat(b);
        switch (op) {
            case '+': return (a + b).toString();
            case '-': return (a - b).toString();
            case '*': return (a * b).toString();
            case '/': return (a / b).toString();
            default: return b;
        }
    }
});
