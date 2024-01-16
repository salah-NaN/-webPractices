class Calculator {
    constructor(operand1Element, operand2Element) {
    this.operand1Element = operand1Element;
    this.operand2Element = operand2Element;
    this.clear();
    }

    clear() {
        this.operand1 = 0;
        this.operand2 = 0;
        this.operator = '';

        this.operand1Element.innerHTML = 5;
        this.operand2Element.innerHTML = 3;

        // console.log("testeo");
        // this.operand1Element.innerHTML = 4;//this.operand1.toString + this.operator;
        // this.operand2Element.innerHTML = 3; //this.operand2.toString;
    }
}

const operand1Element = document.querySelector("[data-operand-1]");
const operand2Element = document.querySelector("[data-operand-2]");

const myCalculator = new Calculator(operand1Element, operand2Element);


