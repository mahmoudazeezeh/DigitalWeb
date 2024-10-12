// Mobile Menu Toggle
const mobileMenu = document.getElementById("mobile-menu");
const navList = document.getElementById("nav-list");

mobileMenu.addEventListener("click", () => {
    navList.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});

// Number System Conversion (with support for decimal fractions)
function convertNumber() {
    const input = document.getElementById("inputNumber").value;
    const inputBase = parseInt(document.getElementById("inputBase").value);
    const outputBase = parseInt(document.getElementById("outputBase").value);

    const [integerPart, fractionalPart] = input.split(".");

    let integerResult = parseInt(integerPart, inputBase).toString(outputBase).toUpperCase();
    let fractionalResult = "";

    if (fractionalPart) {
        let fraction = parseInt(fractionalPart, inputBase) / Math.pow(inputBase, fractionalPart.length);
        fractionalResult = convertFractionToBase(fraction, outputBase);
    }

    const result = integerResult + (fractionalResult ? "." + fractionalResult : "");
    document.getElementById("numberResult").innerHTML = "Result: " + result;
}

function convertFractionToBase(fraction, base) {
    let result = "";
    let precision = 5;

    while (fraction > 0 && precision > 0) {
        fraction *= base;
        let digit = Math.floor(fraction);
        result += digit.toString(base);
        fraction -= digit;
        precision--;
    }

    return result.toUpperCase();
}

// Logic Gates Calculation
function calculateGate() {
    const input1 = parseInt(document.getElementById("gateInput1").value);
    const input2 = parseInt(document.getElementById("gateInput2").value);
    const gateType = document.getElementById("gateType").value;
    let result;

    switch (gateType) {
        case "AND": result = input1 && input2; break;
        case "OR": result = input1 || input2; break;
        case "NOT": result = !input1; break;
        case "NAND": result = !(input1 && input2); break;
        case "NOR": result = !(input1 || input2); break;
        case "XOR": result = input1 ^ input2; break;
        case "XNOR": result = !(input1 ^ input2); break;
    }

    document.getElementById("gateResult").innerHTML = "Result: " + result;
}

// Boolean Simplification (Expanded Logic)
function checkComplement(expression) {
    return expression.replace(/\b(A && !A|!A && A|B && !B|!B && B)\b/g, '0')
                     .replace(/\b(A \|\| !A|!A \|\| A|B \|\| !B|!B \|\| B)\b/g, '1');
}

function simplifyBoolean(expression) {
    let simplified = expression;

    simplified = simplified.replace(/\(([^()]+)\)/g, '$1');
    simplified = simplified.replace(/\b(A \|\| 0|0 \|\| A|B \|\| 0|0 \|\| B)\b/g, (match) => match[0]);
    simplified = simplified.replace(/\b(A && 1|1 && A|B && 1|1 && B)\b/g, (match) => match[0]);
    simplified = simplified.replace(/\b(A && 0|0 && A|B && 0|0 && B)\b/g, '0');
    simplified = simplified.replace(/\b(A \|\| 1|1 \|\| A|B \|\| 1|1 \|\| B)\b/g, '1');
    simplified = simplified.replace(/\b(A \|\| A|B \|\| B)\b/g, (match) => match[0]);
    simplified = simplified.replace(/\b(A && A|B && B)\b/g, (match) => match[0]);

    simplified = checkComplement(simplified);

    return simplified;
}

function simplify(expression) {
    let prevExpression = "";
    let simplifiedExpression = expression;

    while (prevExpression !== simplifiedExpression) {
        prevExpression = simplifiedExpression;
        simplifiedExpression = simplifyBoolean(simplifiedExpression);
    }

    return simplifiedExpression;
}

function simplifyExpression() {
    const expressionInput = document.getElementById('booleanExpression').value; 
    const simplified = simplify(expressionInput);
    
    document.getElementById('booleanResult').textContent = simplified === expressionInput
        ? "Expression is already simplified: " + simplified
        : "Simplified Expression: " + simplified;
}

// Code Conversion (Support for Gray, BCD, Excess-3)
function convertCode() {
    const input = document.getElementById("inputCode").value;
    const codeType = document.getElementById("outputCodeType").value;
    let result;

    // Split the input into whole and fractional parts if it contains a decimal point
    let [integerPart, fractionalPart] = input.split('.');

    if (codeType === "gray") {
        result = binaryToGray(integerPart);
        if (fractionalPart) {
            result += '.' + binaryFractionToGray(fractionalPart);
        }
    } else if (codeType === "bcd") {
        result = binaryToBCD(integerPart);
        if (fractionalPart) {
            result += '.' + binaryFractionToBCD(fractionalPart);
        }
    } else if (codeType === "excess3") {
        result = binaryToExcess3(integerPart);
        if (fractionalPart) {
            result += '.' + binaryFractionToExcess3(fractionalPart);
        }
    }

    document.getElementById("codeResult").innerHTML = "Converted Code: " + result;
}

// Function to convert binary to Gray code (integer part)
function binaryToGray(binary) {
    let gray = binary[0]; // MSB remains the same
    for (let i = 1; i < binary.length; i++) {
        gray += (binary[i] ^ binary[i - 1]); // XOR with previous bit
    }
    return gray;
}

// Function to convert binary fraction to Gray code
function binaryFractionToGray(fraction) {
    let gray = "";
    gray += fraction[0]; // MSB remains the same
    for (let i = 1; i < fraction.length; i++) {
        gray += (fraction[i] ^ fraction[i - 1]); // XOR with previous bit
    }
    return gray;
}

// Function to convert binary to BCD (integer part)
function binaryToBCD(binary) {
    const decimal = parseInt(binary, 2); // Convert binary to decimal
    return decimalToBCD(decimal);
}

// Function to convert decimal to BCD
function decimalToBCD(decimal) {
    let bcd = "";
    const digits = decimal.toString().split("");
    for (const digit of digits) {
        bcd += ("0000" + parseInt(digit).toString(2)).slice(-4); // Convert each digit to 4-bit binary
    }
    return bcd;
}

// Function to convert binary fraction to BCD
function binaryFractionToBCD(fraction) {
    let decimalFraction = 0;
    for (let i = 0; i < fraction.length; i++) {
        decimalFraction += parseInt(fraction[i]) * Math.pow(2, -(i + 1)); // Calculate the decimal fraction value
    }
    // Convert to BCD and handle the fractional part
    return decimalToBCD(Math.floor(decimalFraction * 16)); // Convert to BCD, scaled by 16
}

// Function to convert binary to Excess-3 (integer part)
function binaryToExcess3(binary) {
    const decimal = parseInt(binary, 2); // Convert binary to decimal
    return decimalToExcess3(decimal);
}

// Function to convert decimal to Excess-3
function decimalToExcess3(decimal) {
    let excess3 = "";
    const digits = (decimal + 3).toString().split(""); // Add 3 to decimal value
    for (const digit of digits) {
        excess3 += ("0000" + parseInt(digit).toString(2)).slice(-4); // Convert each digit to 4-bit binary
    }
    return excess3;
}

// Function to convert binary fraction to Excess-3
function binaryFractionToExcess3(fraction) {
    let decimalFraction = 0;
    for (let i = 0; i < fraction.length; i++) {
        decimalFraction += parseInt(fraction[i]) * Math.pow(2, -(i + 1)); // Calculate the decimal fraction value
    }
    // Convert to Excess-3 and handle the fractional part
    return decimalToExcess3(Math.floor(decimalFraction * 16)); // Convert to Excess-3, scaled by 16
}


// Complement Calculation (1's and 2's Complement)
function calculateComplement() {
    const input = document.getElementById("complementInput").value;
    const complementType = document.getElementById("complementType").value;
    let result;

    // Split the input into integer and fractional parts
    let [integerPart, fractionalPart] = input.split('.');

    if (complementType === "1s") {
        let intComplement = onesComplement(integerPart);
        let fracComplement = fractionalPart ? onesComplement(fractionalPart) : '';
        result = intComplement + (fracComplement ? '.' + fracComplement : '');
    } else if (complementType === "2s") {
        let intComplement = twosComplement(integerPart);
        let fracComplement = fractionalPart ? twosComplement(fractionalPart) : '';
        
        // Handle addition of 1 to the fractional part
        if (fractionalPart) {
            // Convert the fractional complement to decimal, add 1, and convert back to binary
            let fracDecimal = parseInt(fracComplement, 2);
            fracDecimal += 1;
            fracComplement = fracDecimal.toString(2);
        }
        
        result = intComplement + (fracComplement ? '.' + fracComplement : '');
    }

    document.getElementById("complementResult").innerHTML = "Complement: " + result;
}

// Helper Functions for Complements
function onesComplement(binary) {
    return binary.split('').map(bit => (bit === '0' ? '1' : '0')).join('');
}

function twosComplement(binary) {
    let oneComplement = onesComplement(binary);
    return (parseInt(oneComplement, 2) + 1).toString(2);
}

/******************************************************************flip flop */
function convertFlipFlop() {
    const flipFlopType = document.getElementById('flipFlopType').value;
    let result, explanation;

    if (flipFlopType === 'd') {
        const d = document.getElementById('inputD').value;
        result = `Next state is ${d}`;
        explanation = `In a D Flip-Flop, the next state directly follows the input (D). If D is 1, the next state will be 1, and if D is 0, the next state will be 0.`;
    } else if (flipFlopType === 'jk') {
        const j = document.getElementById('inputJ').value;
        const k = document.getElementById('inputK').value;
        // JK Flip-Flop logic: Next state = JQ' + K'Q
        result = `Next state calculated using J = ${j} and K = ${k}`;
        explanation = `In a JK Flip-Flop:
        - If J=0 and K=0, the next state remains the same (no change).
        - If J=0 and K=1, the next state resets to 0.
        - If J=1 and K=0, the next state sets to 1.
        - If J=1 and K=1, the next state toggles (if it's 0, it becomes 1; if it's 1, it becomes 0).`;
    } else if (flipFlopType === 't') {
        const t = document.getElementById('inputT').value;
        result = `Next state calculated using T = ${t}`;
        explanation = `In a T Flip-Flop, the next state toggles if T is 1. If T is 0, the state remains unchanged. This is commonly used for counting or toggling states.`;
    }

    document.getElementById('flipFlopResult').innerText = result;
    document.getElementById('flipFlopExplanation').innerText = explanation;
}

// This function will load the correct inputs based on flip-flop type
document.getElementById('flipFlopType').addEventListener('change', function() {
    const flipFlopType = this.value;
    let inputFields = '';

    if (flipFlopType === 'd') {
        inputFields = `
            <label for="inputD">Enter D:</label>
            <input type="text" id="inputD" placeholder="Enter 0 or 1">`;
    } else if (flipFlopType === 'jk') {
        inputFields = `
            <label for="inputJ">Enter J:</label>
            <input type="text" id="inputJ" placeholder="Enter 0 or 1">
            <label for="inputK">Enter K:</label>
            <input type="text" id="inputK" placeholder="Enter 0 or 1">`;
    } else if (flipFlopType === 't') {
        inputFields = `
            <label for="inputT">Enter T:</label>
            <input type="text" id="inputT" placeholder="Enter 0 or 1">`;
    }

    document.getElementById('flipFlopInputs').innerHTML = inputFields;
});

