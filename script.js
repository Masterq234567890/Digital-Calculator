function openCalculator() {
    document.querySelector(".main-menu").style.display = "none";
    document.getElementById("calculator-screen").style.display = "block";
}

function addToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value.replace(/÷/g, "/").replace(/×/g,"*"));
    } catch {
        display.value = "Error";
    }
}

function toggleSign() {
    const display = document.getElementById("display");
    if (display.value) {
        if (display.value.charAt(0) === '-') display.value = display.value.slice(1);
        else display.value = '-' + display.value;
    }
}
