const buttons = document.getElementById("buttons");
clear = document.getElementById("clear");
backspace = document.getElementById("backspace");
precent = document.getElementById("percent");
divide = document.getElementById("divide");
seven = document.getElementById("7");
eight = document.getElementById("8");
nine = document.getElementById("9");
multiply = document.getElementById("multiply");
four = document.getElementById("4");
five = document.getElementById("5");
six = document.getElementById("6");
minus = document.getElementById("subtract");
one = document.getElementById("1");
two = document.getElementById("2");
three = document.getElementById("3");
plus = document.getElementById("add");
zero = document.getElementById("0");
decimalDot = document.getElementById("decimal");
equals = document.getElementById("equals");
display = document.getElementById("input");

h2 = document.createElement("h2");
display.appendChild(h2);
h2.appendChild(document.createTextNode("0"));


// Clear Button
clear.addEventListener("click", () => {
    h2.innerText = "0";
});

// Backspace Button
backspace.addEventListener("click", () => {
    h2.innerText = h2.innerText.slice(0, -1);
});

// Precent Button
precent.addEventListener("click", () => {
    h2.innerText = h2.innerText + "%";
    h2.innerText = h2.innerText.replace("%", "/100");
});

// Divide Button
divide.addEventListener("click", () => {
    h2.innerText = h2.innerText + "/";
})

// Multiply Button
multiply.addEventListener("click", () => {
    h2.innerText = h2.innerText + "*";
})

// Minus Button
minus.addEventListener("click", () => {
    h2.innerText = h2.innerText + "-";
})

// Plus Button
plus.addEventListener("click", () => {
    h2.innerText = h2.innerText + "+";
})

// Decimal Button
decimalDot.addEventListener("click", () => {
    h2.innerText = h2.innerText + ".";
})

// Equals Button
equals.addEventListener("click", () => {
    h2.innerText = eval(h2.innerText);
})

// Number Buttons
seven.addEventListener("click", () => {
    if (h2.innerText === "0") {
        h2.innerText = "7";
    } else {
        h2.innerText = h2.innerText + "7";
    }
})

eight.addEventListener("click", () => {
    if (h2.innerText === "0") {
        h2.innerText = "8";
    } else {
        h2.innerText = h2.innerText + "8";
    }
})

nine.addEventListener("click", () => {
    if (h2.innerText === "0") {
        h2.innerText = "9";
    } else {
        h2.innerText = h2.innerText + "9";
    }
})

four.addEventListener("click", () => {
    if (h2.innerText === "0") {
        h2.innerText = "4";
    } else {
        h2.innerText = h2.innerText + "4";
    }
})

five.addEventListener("click", () => {
    if (h2.innerText === "0") {
        h2.innerText = "5";
    } else {
        h2.innerText = h2.innerText + "5";
    }
})

six.addEventListener("click", () => {
    if (h2.innerText === "0") {
        h2.innerText = "6";
    } else {
        h2.innerText = h2.innerText + "6";
    }
})

one.addEventListener("click", () => {
    if (h2.innerText === "0") {
        h2.innerText = "1";
    } else {
        h2.innerText = h2.innerText + "1";
    }
})

two.addEventListener("click", () => {
    if (h2.innerText === "0") {
        h2.innerText = "2";
    } else {
        h2.innerText = h2.innerText + "2";
    }
})

three.addEventListener("click", () => {
    if (h2.innerText === "0") {
        h2.innerText = "3";
    } else {
        h2.innerText = h2.innerText + "3";
    }
})

zero.addEventListener("click", () => {
    if (h2.innerText === "0") {
        h2.innerText = "0";
    } else {
        h2.innerText = h2.innerText + "0";
    }
})



