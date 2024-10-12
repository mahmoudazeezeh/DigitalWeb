// Sample questions for each difficulty level
const easyQuestions = [
    { question: "What is the binary number system?", options: ["0 and 1", "1 and 2", "2 and 3", "3 and 4"], correctAnswer: 0 },
    { question: "Which logic gate outputs true only if all inputs are true?", options: ["AND", "OR", "NOT", "NAND"], correctAnswer: 0 },
    { question: "What does RAM stand for?", options: ["Random Access Memory", "Read Access Memory", "Read Any Memory", "None"], correctAnswer: 0 },
    { question: "Which of the following is a type of flip-flop?", options: ["SR", "DR", "HR", "LR"], correctAnswer: 0 },
    { question: "What is a truth table?", options: ["Displays all inputs and outputs", "Displays only inputs", "Displays only outputs", "None of these"], correctAnswer: 0 },
    { question: "What is the output of an OR gate if both inputs are false?", options: ["True", "False", "Undefined", "None"], correctAnswer: 1 },
    { question: "What is the purpose of a NOT gate?", options: ["Inverts the input", "Copies the input", "Adds the input", "None"], correctAnswer: 0 },
    { question: "Which of the following is a combinational circuit?", options: ["Adder", "Flip-Flop", "Counter", "Register"], correctAnswer: 0 },
    { question: "What is the decimal equivalent of binary 101?", options: ["3", "4", "5", "6"], correctAnswer: 2 },
    { question: "Which number system uses base 8?", options: ["Binary", "Octal", "Decimal", "Hexadecimal"], correctAnswer: 1 },
    { question: "In digital logic, what does '1' represent?", options: ["On", "Off", "Error", "None"], correctAnswer: 0 },
    { question: "Which circuit can store data?", options: ["Memory", "Combinational Circuit", "Decoders", "Encoders"], correctAnswer: 0 },
    { question: "What is the main function of a multiplexer?", options: ["Selects data from multiple inputs", "Stores data", "Processes data", "Transmits data"], correctAnswer: 0 },
    { question: "Which of the following is a sequential circuit?", options: ["Counter", "Adder", "Decoder", "None"], correctAnswer: 0 },
    { question: "How many bits are in a byte?", options: ["4", "8", "16", "32"], correctAnswer: 1 },
    { question: "What does a NAND gate do?", options: ["Outputs false only if all inputs are true", "Outputs true for all inputs", "Outputs true if at least one input is true", "None"], correctAnswer: 0 },
    { question: "What is the result of NOT(1)?", options: ["0", "1", "Undefined", "None"], correctAnswer: 0 },
    { question: "Which device is used to convert analog signals to digital?", options: ["ADC", "DAC", "Amplifier", "None"], correctAnswer: 0 },
    { question: "Which of the following is a storage element?", options: ["Latch", "Adder", "Multiplexer", "Decoder"], correctAnswer: 0 },
    { question: "In Boolean algebra, what does 'A + 0' equal?", options: ["A", "0", "1", "None"], correctAnswer: 0 },
    { question: "What does 'A . 1' equal in Boolean algebra?", options: ["A", "1", "0", "None"], correctAnswer: 0 },
    { question: "Which is NOT a logic gate?", options: ["AND", "OR", "XOR", "MUL"], correctAnswer: 3 },
    { question: "What is the function of a decoder?", options: ["Converts binary data to unique outputs", "Stores data", "Processes data", "None"], correctAnswer: 0 },
    { question: "Which component stores information using memory cells?", options: ["RAM", "ALU", "CPU", "None"], correctAnswer: 0 },
    { question: "What does an encoder do?", options: ["Converts multiple inputs into fewer outputs", "Stores data", "Processes data", "None"], correctAnswer: 0 },
    { question: "Which of the following is an application of digital logic?", options: ["Computers", "Televisions", "Radios", "All of these"], correctAnswer: 3 },
    { question: "What is the main function of an ALU?", options: ["Arithmetic and logic operations", "Data storage", "Signal processing", "None"], correctAnswer: 0 },
    { question: "Which logic gate is used in arithmetic operations?", options: ["AND", "OR", "XOR", "All of these"], correctAnswer: 3 },
    { question: "What is the output of XOR gate if both inputs are true?", options: ["True", "False", "Undefined", "None"], correctAnswer: 1 },
    { question: "What does the term 'digital' refer to?", options: ["Discrete values", "Continuous values", "Analog signals", "None"], correctAnswer: 0 },
    { question: "In digital systems, what does '0' typically represent?", options: ["Off", "On", "Error", "None"], correctAnswer: 0 },
    { question: "Which number system uses base 16?", options: ["Binary", "Octal", "Decimal", "Hexadecimal"], correctAnswer: 3 },
    { question: "What is a flip-flop used for?", options: ["Storing binary data", "Processing data", "Converting signals", "None"], correctAnswer: 0 },
    { question: "Which of the following is a memory device?", options: ["SRAM", "ALU", "MUX", "None"], correctAnswer: 0 },
    { question: "What is the output of AND gate if both inputs are true?", options: ["True", "False", "Undefined", "None"], correctAnswer: 0 },
];

const mediumQuestions = [
    { question: "What is the main purpose of a flip-flop?", options: ["Store data", "Process data", "Transmit data", "Convert data"], correctAnswer: 0 },
    { question: "What is the function of a clock in digital circuits?", options: ["Synchronize operations", "Store data", "Process signals", "None"], correctAnswer: 0 },
    { question: "How many bits are required to represent the decimal number 255?", options: ["7", "8", "9", "10"], correctAnswer: 1 },
    { question: "Which of the following is an example of a combinational circuit?", options: ["Counter", "Adder", "Shift Register", "Flip-Flop"], correctAnswer: 1 },
    { question: "What is the output of the expression A + A'?", options: ["0", "1", "A", "None"], correctAnswer: 1 },
    { question: "Which logic gate is equivalent to a NOR gate followed by a NOT gate?", options: ["NAND", "AND", "OR", "XOR"], correctAnswer: 0 },
    { question: "What is a multiplexer's main function?", options: ["Selects one input from multiple inputs", "Stores data", "Processes data", "None"], correctAnswer: 0 },
    { question: "What is the decimal equivalent of binary 1111?", options: ["15", "14", "16", "17"], correctAnswer: 0 },
    { question: "Which component is responsible for performing arithmetic operations?", options: ["ALU", "Control Unit", "Registers", "None"], correctAnswer: 0 },
    { question: "What is a shift register used for?", options: ["Storing data", "Transmitting data", "Data manipulation", "All of these"], correctAnswer: 3 },
    { question: "In a digital circuit, what does a logic '1' represent?", options: ["On", "Off", "Error", "None"], correctAnswer: 0 },
    { question: "What type of flip-flop is triggered by a clock signal?", options: ["Edge-triggered", "Level-triggered", "None", "All"], correctAnswer: 0 },
    { question: "What is the result of A . 0 in Boolean algebra?", options: ["0", "1", "A", "None"], correctAnswer: 0 },
    { question: "Which of the following represents a binary number?", options: ["10101", "12345", "A1B2", "All"], correctAnswer: 0 },
    { question: "What type of logic gate is a XOR gate?", options: ["Combinational", "Sequential", "Memory", "None"], correctAnswer: 0 },
    { question: "How many outputs does a 2-to-1 multiplexer have?", options: ["1", "2", "3", "4"], correctAnswer: 0 },
    { question: "What does the term 'asynchronous' mean in digital circuits?", options: ["No clock signal", "With clock signal", "Constant operation", "None"], correctAnswer: 0 },
    { question: "What is the purpose of a buffer in digital circuits?", options: ["Amplify signals", "Store data", "Process data", "None"], correctAnswer: 0 },
    { question: "Which circuit can be used to implement a delay?", options: ["Flip-Flop", "Counter", "Decoder", "None"], correctAnswer: 0 },
    { question: "What is the role of the control unit in a CPU?", options: ["Manage operations", "Store data", "Process data", "None"], correctAnswer: 0 },
    { question: "What type of memory is non-volatile?", options: ["ROM", "RAM", "Cache", "None"], correctAnswer: 0 },
    { question: "What is the result of NOT(A . B)?", options: ["A' + B'", "A + B", "A' . B", "None"], correctAnswer: 0 },
    { question: "Which logic gate is used to perform addition?", options: ["OR", "AND", "XOR", "None"], correctAnswer: 2 },
    { question: "What is a digital signal?", options: ["Discrete values", "Continuous values", "Analog signals", "None"], correctAnswer: 0 },
    { question: "What does the term 'synchronous' mean?", options: ["With clock signal", "No clock signal", "Constant operation", "None"], correctAnswer: 0 },
    { question: "Which device is used to convert digital signals to analog?", options: ["DAC", "ADC", "Amplifier", "None"], correctAnswer: 0 },
    { question: "What does the term 'flip-flop' refer to?", options: ["A bistable device", "A combinational device", "A memory device", "None"], correctAnswer: 0 },
    { question: "What is a half-adder used for?", options: ["Adding two bits", "Storing data", "Processing data", "None"], correctAnswer: 0 },
    { question: "What is the purpose of a full-adder?", options: ["Adding three bits", "Storing data", "Processing data", "None"], correctAnswer: 0 },
    { question: "Which logic gate is an example of a universal gate?", options: ["NAND", "NOR", "XOR", "None"], correctAnswer: 0 },
    { question: "What is a digital circuit?", options: ["Circuit using discrete signals", "Circuit using continuous signals", "Analog circuit", "None"], correctAnswer: 0 },
    { question: "What is the role of a comparator?", options: ["Compare two binary numbers", "Store data", "Process data", "None"], correctAnswer: 0 },
    { question: "Which device can act as a memory unit?", options: ["RAM", "ALU", "Control Unit", "None"], correctAnswer: 0 },
    { question: "What is a binary tree used for?", options: ["Data structure", "Memory", "Signal processing", "None"], correctAnswer: 0 },
    { question: "What is the output of a logic gate if there are no inputs?", options: ["Undefined", "True", "False", "None"], correctAnswer: 0 },
];

const hardQuestions = [
    { question: "What is the purpose of a state machine?", options: ["Model system behavior", "Store data", "Process data", "None"], correctAnswer: 0 },
    { question: "Which of the following is an example of a sequential circuit?", options: ["Counter", "Adder", "Multiplexer", "None"], correctAnswer: 0 },
    { question: "What is the main difference between synchronous and asynchronous circuits?", options: ["Clock signal usage", "Data processing speed", "Circuit complexity", "None"], correctAnswer: 0 },
    { question: "What is the role of a frequency divider?", options: ["Divide clock frequency", "Multiply clock frequency", "Store data", "None"], correctAnswer: 0 },
    { question: "How is data stored in a ROM?", options: ["Fixed data", "Volatile data", "Dynamic data", "None"], correctAnswer: 0 },
    { question: "What is a latch?", options: ["Level-sensitive storage device", "Edge-sensitive storage device", "None", "All"], correctAnswer: 0 },
    { question: "What does the term 'fan-out' refer to?", options: ["Number of outputs from a gate", "Number of inputs to a gate", "Power consumption", "None"], correctAnswer: 0 },
    { question: "Which circuit is used to store binary data temporarily?", options: ["Latch", "Counter", "Flip-Flop", "None"], correctAnswer: 2 },
    { question: "What is the main function of a counter?", options: ["Count events", "Store data", "Process signals", "None"], correctAnswer: 0 },
    { question: "What is the purpose of an oscillator?", options: ["Generate clock signals", "Store data", "Process signals", "None"], correctAnswer: 0 },
    { question: "How is a finite state machine structured?", options: ["States and transitions", "Inputs and outputs", "Memory and storage", "None"], correctAnswer: 0 },
    { question: "What is the primary function of a digital signal processor?", options: ["Signal processing", "Data storage", "Arithmetic operations", "None"], correctAnswer: 0 },
    { question: "What is the purpose of a frequency counter?", options: ["Count frequency of input signal", "Store frequency", "Generate signals", "None"], correctAnswer: 0 },
    { question: "What is a Johnson counter?", options: ["A type of ring counter", "A type of binary counter", "A type of synchronous counter", "None"], correctAnswer: 0 },
    { question: "Which of the following describes a ripple counter?", options: ["Asynchronous", "Synchronous", "Fast", "None"], correctAnswer: 0 },
    { question: "What is the difference between a shift register and a buffer?", options: ["Data movement vs. data storage", "Data storage vs. data movement", "None", "All"], correctAnswer: 0 },
    { question: "What does the term 'setup time' refer to?", options: ["Time required for stable data before clock edge", "Time required for stable data after clock edge", "None", "All"], correctAnswer: 0 },
    { question: "What is a synchronous counter?", options: ["Counter with a clock signal", "Counter without a clock signal", "None", "All"], correctAnswer: 0 },
    { question: "What is the primary function of a D flip-flop?", options: ["Store data", "Process data", "Generate signals", "None"], correctAnswer: 0 },
    { question: "How many states does a 2-bit counter have?", options: ["4", "2", "8", "None"], correctAnswer: 0 },
    { question: "What is the main advantage of using a synchronous circuit?", options: ["Predictable behavior", "Lower power consumption", "More complexity", "None"], correctAnswer: 0 },
    { question: "What does the term 'propagation delay' refer to?", options: ["Time taken for a signal to travel", "Time taken for data processing", "None", "All"], correctAnswer: 0 },
    { question: "What is the role of a binary adder?", options: ["Add binary numbers", "Subtract binary numbers", "Multiply binary numbers", "None"], correctAnswer: 0 },
    { question: "What is the main advantage of using a flip-flop?", options: ["Stable data storage", "Fast processing", "Low power consumption", "None"], correctAnswer: 0 },
    { question: "What is the output of a NAND gate when both inputs are high?", options: ["Low", "High", "Undefined", "None"], correctAnswer: 0 },
    { question: "What is a programmable logic array (PLA)?", options: ["A type of programmable logic device", "A type of memory device", "None", "All"], correctAnswer: 0 },
    { question: "What is a carry-lookahead adder?", options: ["Adder with faster carry computation", "Adder with slower carry computation", "None", "All"], correctAnswer: 0 },
    { question: "How does a ROM differ from a RAM?", options: ["ROM is non-volatile", "RAM is non-volatile", "None", "All"], correctAnswer: 0 },
    { question: "What is a synchronous dynamic RAM (SDRAM)?", options: ["RAM synchronized with clock", "RAM not synchronized", "None", "All"], correctAnswer: 0 },
    { question: "What is a digital comparator?", options: ["Compares binary numbers", "Stores data", "Processes signals", "None"], correctAnswer: 0 },
    { question: "What is a dynamic RAM (DRAM)?", options: ["Volatile memory", "Non-volatile memory", "None", "All"], correctAnswer: 0 },
    { question: "What does the term 'bit width' refer to?", options: ["Number of bits in a binary number", "Number of outputs from a gate", "None", "All"], correctAnswer: 0 },
];

// Selecting DOM elements
const cardContainer = document.getElementById('card-container');
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const backButton = document.getElementById('back-button');
const submitButton = document.getElementById('submit-button');

// Function to create question elements
function createQuestionElements(questions) {
    questionContainer.innerHTML = ''; // Clear previous questions
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<p>${index + 1}. ${question.question}</p>`;
        
        question.options.forEach((option, i) => {
            const optionLabel = document.createElement('label');
            optionLabel.innerHTML = `
                <input type="radio" name="question${index}" value="${i}" />
                ${option}
            `;
            questionDiv.appendChild(optionLabel);
        });

        questionContainer.appendChild(questionDiv);
    });
}

// Function to show the result
function showResult(score) {
    resultContainer.innerHTML = `
        <div class="result-card ${score > 20 ? 'green' : score > 15 ? 'orange' : 'red'}">
            <p>Your Score: ${score}</p>
        </div>
    `;
    resultContainer.style.display = 'flex'; // Show result
    backButton.style.display = 'block'; // Show back button
}

// Function to handle card clicks
function handleCardClick(difficulty) {
    let selectedQuestions;
    if (difficulty === 'easy') {
        selectedQuestions = easyQuestions;
    } else if (difficulty === 'medium') {
        selectedQuestions = mediumQuestions;
    } else {
        selectedQuestions = hardQuestions;
    }
    createQuestionElements(selectedQuestions);
    cardContainer.style.display = 'none'; // Hide the cards
    questionContainer.style.display = 'block'; // Show questions
    submitButton.style.display = 'block'; // Show submit button
}

// Function to handle submit
function handleSubmit() {
    const totalQuestions = easyQuestions.length + mediumQuestions.length + hardQuestions.length;
    let score = 0;
    
    // Check answers for all questions
    document.querySelectorAll('.question').forEach((questionDiv, index) => {
        const selectedOption = questionDiv.querySelector('input[type="radio"]:checked');
        if (selectedOption && parseInt(selectedOption.value) === selectedQuestions[index].correct) {
            score++;
        }
    });
    
    showResult(score);
}

// Event listeners for cards
document.getElementById('easy-card').addEventListener('click', () => handleCardClick('easy'));
document.getElementById('medium-card').addEventListener('click', () => handleCardClick('medium'));
document.getElementById('hard-card').addEventListener('click', () => handleCardClick('hard'));

// Back button to return to cards
backButton.addEventListener('click', () => {
    cardContainer.style.display = 'flex'; // Show the cards again
    questionContainer.style.display = 'none'; // Hide questions
    resultContainer.style.display = 'none'; // Clear result
    submitButton.style.display = 'none'; // Hide submit button
});

// Event listener for submit button
submitButton.addEventListener('click', handleSubmit);
