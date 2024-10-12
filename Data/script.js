// Load questions based on the difficulty
const loadQuestions = (difficulty) => {
    const questionContainer = document.getElementById("question-container");
    const difficultyTitle = document.getElementById("difficulty-title");
    const questionsList = questions[difficulty];

    difficultyTitle.textContent = `${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Questions`;

    questionsList.forEach((item, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        questionDiv.innerHTML = `
            <p>${index + 1}. ${item.question}</p>
            ${item.options.map(option => `<label><input type="radio" name="question${index}" value="${option.charAt(0)}"> ${option}</label>`).join('')}
        `;
        
        questionContainer.appendChild(questionDiv);
    });
};

// Determine difficulty from URL
const urlParams = new URLSearchParams(window.location.search);
const difficulty = urlParams.get('difficulty') || 'easy'; // Default to easy if not specified
loadQuestions(difficulty);

// Grading logic
document.getElementById("submit").addEventListener("click", submitQuiz);

function submitQuiz() {
    let correct = 0;
    const total = questions[difficulty].length;
    const resultDiv = document.getElementById("result");
    const radios = document.querySelectorAll('input[type="radio"]:checked');

    radios.forEach((radio, index) => {
        if (radio.value === questions[difficulty][index].correctAnswer) {
            correct++;
        } else {
            // Highlight the correct answer in green and the wrong answer in red
            document.querySelectorAll(`[name="question${index}"]`).forEach(el => {
                if (el.value === questions[difficulty][index].correctAnswer) {
                    el.parentElement.style.color = 'green'; // Correct answer
                } else if (el === radio) {
                    el.parentElement.style.color = 'red'; // Selected wrong answer
                }
            });
        }
    });

    const scorePercentage = (correct / total) * 100;
    resultDiv.classList.remove("hidden");

    if (scorePercentage >= 80) {
        resultDiv.innerHTML = `<div style="background-color: green; color: white;">Your Score: ${scorePercentage}% - Great Job!</div>`;
    } else if (scorePercentage >= 50) {
        resultDiv.innerHTML = `<div style="background-color: orange; color: white;">Your Score: ${scorePercentage}% - Good Effort!</div>`;
    } else {
        resultDiv.innerHTML = `<div style="background-color: red; color: white;">Your Score: ${scorePercentage}% - Try Again!</div>`;
    }
}

document.getElementById("back").addEventListener("click", function() {
    window.history.back();
});
