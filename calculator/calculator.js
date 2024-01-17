class Calculator {
    constructor(operand1Element, operand2Element) {
    this.operand1Element = operand1Element;
    this.operand2Element = operand2Element;
    // this.clear();
    }

    clear() {
        this.operand1 = 0;
        this.operand2 = 0;
        this.operator = '';
        this.updateUI();
        console.log("hi");
    }

    updateUI (){
        this.operand1Element.innerHTML = this.operand1 + this.operator;
        this.operand2Element.innerHTML = this.operand2;
    }

    appendNumber(number) {
        // if (this.operand2.toString === '0') this.operand2 = +number;
        // this.operand2 += number.toString;
        console.log('fjdlsjfksld');
        this.operand2 += number;
        this.updateUI();
    }
}




// HTML buttons catching
const operand1Element = document.querySelector("[data-operand-1]");
const operand2Element = document.querySelector("[data-operand-2]");
const clearButton = document.querySelector("[data-clear]");
const numbersButtons = document.querySelectorAll("[data-number]");

const myCalculator = new Calculator(operand1Element, operand2Element);

// calculator buttons events
clearButton.addEventListener("click", () => {
    myCalculator.clear();
});


numbersButtons.forEach(button => {
    button.addEventListener('click', () => {
        myCalculator.appendNumber(button.innerHTML);
    });
});


