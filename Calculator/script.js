let operator = "";
let prevValue = "";
let currValue = "";

document.addEventListener("DOMContentLoaded", () => {
  let clear = document.querySelector("#clear");
  let delValue = document.querySelector("#del");
  let decimal = document.querySelector("#decimal");
  let equal = document.querySelector("#equal");

  let numbers = document.querySelectorAll(".number");
  let operators = document.querySelectorAll(".operator");

  let previous = document.querySelector(".prev_operand");
  let current = document.querySelector(".current_operand");

  numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
      handleNumber(e.target.dataset.value);
      current.textContent = currValue;
    });
  });

  operators.forEach((operand) => {
    operand.addEventListener("click", (e) => {
      handleOperator(e.target.dataset.value);
      previous.textContent = prevValue + " " + operator;
      current.textContent = currValue;
    });
  });

  clear.addEventListener("click", () => {
    prevValue = "";
    currValue = "";
    operator = "";
    previous.textContent = currValue;
    current.textContent = currValue;
  });

  equal.addEventListener("click", () => {
    if ((prevValue && currValue) || operator != "%" || operator != "!") {
      calculate();
      previous.textContent = "";
      current.textContent = prevValue;
    }
  });

  decimal.addEventListener("click", () => {
    addDecimal();
  });

  delValue.addEventListener("click", () => {
    currValue = currValue.slice(0, -1);
  });
});

function handleNumber(num) {
  if (currValue.length <= 5) {
    currValue += num;
  }
}
function handleOperator(op) {
  operator = op;
  prevValue = currValue;
  currValue = "";
}

calculate = () => {
  prevValue = Number(prevValue);
  currValue = Number(currValue);

  if (operator === "+") {
    prevValue = add(prevValue, currValue);
  } else if (operator === "-") {
    prevValue = substract(prevValue, currValue);
  } else if (operator === "x") {
    prevValue = multiply(prevValue, currValue);
  } else if (operator === "/") {
    prevValue = divide(prevValue, currValue);
  } else if (operator === "^") {
    prevValue = power(prevValue, currValue);
  } else if (operator === "%") {
    prevValue = percent(prevValue);
  } else if (operator === "!") {
    prevValue = factorial(prevValue);
  }

  prevValue = roundNumber(prevValue);
  prevValue = prevValue.toString();
  currValue = prevValue;
};

function roundNumber(n) {
  return Math.round(n * 1000) / 1000;
}
function addDecimal() {
  if (!currValue.includes(".")) {
    currValue += ".";
  }
}

add = (a, b) => {
  return a + b;
};
substract = (a, b) => {
  return a - b;
};
multiply = (a, b) => {
  return a * b;
};
divide = (a, b) => {
  return a / b;
};
percent = (a) => {
  return a / 100;
};
power = (a, b) => {
  return a ** b;
};
factorial = (a) => {
  let ans = 1;
  for (let i = 1; i <= a; i++) ans = ans * i;
  return ans;
};

// del not functioning properly
