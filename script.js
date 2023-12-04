let displayValue = '';
const display = document.getElementById("display");

function appendToDisplay(value) {
    displayValue += value;
    display.value = displayValue;
}

function clearEntry() {
    displayValue = '';
    display.value = displayValue;
}

function clearDisplay() {
    clearEntry();
}

function deleteFromDisplay() {
    displayValue = displayValue.slice(0, -1);
    display.value = displayValue;
}

function operation(operator) {
    displayValue += operator;
    display.value = displayValue;
}

function calculate() {
    try {
        let result = eval(displayValue);
        display.value = result;
        displayValue = result.toString();
    } catch (error) {
        display.value = "error";
    }
}

  document.querySelectorAll('#numb').forEach(h1 => {
    h1.addEventListener('click', () => {
      appendToDisplay(h1.textContent);
    });
  });

  document.querySelector('#clear_entry').addEventListener('click', clearEntry);
  document.querySelector('#clear').addEventListener('click', clearDisplay);
  document.querySelector('#delete').addEventListener('click', deleteFromDisplay);

  document.querySelectorAll('#operation').forEach(h1 => {
    h1.addEventListener('click', () => {
      operation(h1.textContent);
    });
  });

  document.querySelector('.calculate').addEventListener('click',calculate);