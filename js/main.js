const add = (a, b) => +a + +b;
const subtract = (a, b) => +a - +b;
const multiply = (a, b) => +a * +b;
const divide = (a, b) => +a / +b;

function operate(a, op, b) {
    switch (op) {
        case "+":
            return add(a, b);
        case "−":
            return subtract(a, b);
        case "×":
            return multiply(a, b);
        case "÷":
            return divide(a, b);
    }
}

let expression = [];
let display = "";

const buttons = document.querySelectorAll(".button");
for (const button of buttons) {
    button.addEventListener("click", () => {
        if (button.classList.contains("decimal")) {
            str = expression.join("");
            calc = str.split(" ");
            if (!calc[calc.length - 1].includes(".") && !(calc[2] === "")) {
                const text = button.firstChild.textContent;
                expression.push(text);
                display += text;
            }
        } else if (button.classList.contains("num")) {
            const text = button.firstChild.textContent;
            expression.push(text);
            display += text;
        } else if (button.classList.contains("op")) {
            display = " ";
            for (const op of ["+", "−", "÷", "×"]) {
                if (expression.includes(op)) {
                    str = expression.join("");
                    calc = str.split(" ");
                    if (!(calc[2] === "")) {
                        expression = [operate(...calc).toString()];
                    } else {
                        expression = [calc[0]];
                    }
                }
            }
            const text = button.firstChild.textContent;
            expression.push(" ");
            expression.push(text);
            expression.push(" ");
            document.querySelector(".expression").textContent = expression.join("");
        } else if (button.classList.contains("equals")) {
            if (!expression.includes(" ")) {
                expression = [expression.slice(1).join('')];
            }
            str = expression.join("");
            calc = str.split(" ");
            if (!(calc[2] === "") && !(calc.length == 1)) {
                expression = [operate(...calc).toString()];
            } else {
                expression = [calc[0]];
            }
            document.querySelector(".expression").textContent = expression.join("");
            display = "";
        }

        document.querySelector(".entry").textContent = display;
    });
}
