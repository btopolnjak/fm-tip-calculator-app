const billInput = document.getElementById("bill");
const tipAmount = document.getElementById("tip");
const totalAmount = document.getElementById("total");
const customTipInput = document.getElementById("custom");
const peopleNo = document.getElementById("people");
const buttons = document.getElementsByTagName("button");
let tipPercent = 1;

function calculate() {
    if (billInput.value == "") { reset() }
    let tipTotalCalculated = billInput.value * tipPercent / parseInt(peopleNo.value);
    let totalCalculated = billInput.value / parseInt(peopleNo.value) + tipTotalCalculated;
    tipAmount.innerHTML = `\$${tipTotalCalculated.toFixed(2)}`;
    totalAmount.innerHTML = `\$${totalCalculated.toFixed(2)}`;
}

function reset() {
    billInput.value = "0";
    peopleNo.value = "1";
    tipAmount.innerHTML = "$0.00";
    totalAmount.innerHTML = "$0.00";
    for (i=0; i<buttons.length; i++) {
        buttons[i].classList.remove("button-active");
    }
}

function tipPercentInput(percent) {
    if (event.target.tagName == "BUTTON") { customTipInput.value = "" }
    for (i=0; i<buttons.length; i++) {
        buttons[i].classList.remove("button-active");
    }
    tipPercent = parseInt(percent) / 100;
    event.target.classList.add("button-active");
    calculate();
}