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
        this.updateUI();
    }

    updateUI (){
        this.operand1Element.innerHTML = this.operand1 + this.operator;
        this.operand2Element.innerHTML = this.operand2;
    }

    appendNumber(number) {
        if (number.toString() === "." && this.operand2.toString().includes(".")) return;
        this.operand2 = this.operand2.toString() === "0" && number !== "."  ? 
                        this.operand2 = number:
                        this.operand2.toString() + number;
        this.updateUI();
    }
    
    delete() {
        if(this.operand2 === 0) return;
        this.operand2 = +this.operand2.toString().slice(0, -1);
        this.updateUI();
    }

    operate (operation) {
        if (this.operator) {
            this.executeOperation();            
        }

        this.operator = operation;
        if (this.operand2 !== 0) {
            this.operand1 = this.operand2;
        }
        this.operand2 = 0;

        this.updateUI();
    }

    executeOperation() {
        switch(this.operator) {
            case "+": 
                this.operand1 = +this.operand1 + +this.operand2;
                break;
            case "-": 
                this.operand1 = this.operand1 - this.operand2;
                break;
            case "*": 
                this.operand1 = this.operand1 * this.operand2;
                break;
            case "/": 
                this.operand1 = this.operand1 / this.operand2;
                break;
        }
        this.operand2 = 0;
        this.updateUI();
    }

    equals() {
        this.executeOperation();
        this.operator = "";
        this.updateUI();
    }

}




// HTML buttons catching
const operand1Element = document.querySelector("[data-operand-1]");
const operand2Element = document.querySelector("[data-operand-2]");
const clearButton = document.querySelector("[data-clear]");
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operation]");
const deleteButton = document.querySelector("[data-delete]");
const equalsButton = document.querySelector("[data-equals]");

const myCalculator = new Calculator(operand1Element, operand2Element);

// calculator buttons events
clearButton.addEventListener("click", () => {
    myCalculator.clear();
});


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        myCalculator.appendNumber(button.innerHTML);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        myCalculator.operate(button.innerHTML);
    })
})

deleteButton.addEventListener("click", () => {
    myCalculator.delete();
})

equalsButton.addEventListener("click", () => {
    myCalculator.equals();
})

