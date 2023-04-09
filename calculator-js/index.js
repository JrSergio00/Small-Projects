
const numbersButtons = document.querySelectorAll("[data-number]");
const operationButton = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelectorAll("[data-equals]");
const deleteButtom = document.querySelectorAll("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandText = document.querySelectorAll("[data-previous-operand]");
const currentOperandText = document.querySelectorAll("[data-current-operand]");

class Calculator{
    constructor(previousOperandText, currentOperandText) {
        this.previousOperandText = previousOperandText;
        this.currentOperandText = currentOperandText;
        this.clear();

    }

    clear(){
        this.previousOperand = "";
        this.currentOperand = "";
        this.operation = undefined;
    }

    updateDisplay() {
        this.previousOperandText.innerText = this.previousOperand;
        this.currentOperandText.innerText = this.currentOperand;
    }
}

const calculator = new Calculator(
    previousOperandText,
    currentOperandText
);

allClearButton.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
    console.log(previousOperandText.values);
});