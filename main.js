/*Kiểm tra DOM*/
//1. Khi vừa load trang
const quizes = [
    {
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [2, 3, 4, 5],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [3, 4, 5, 6],
    },
];

const quizContainer = document.querySelector(".quiz-container");
console.log(quizContainer)



const renderQuiz = (quizes) => {
   quizContainer.innerHTML = "";
   let html = "";
   quizes.forEach(quiz => {
    let html2 ="";
    quiz.answers.forEach(answer => {
            html2 += `
            <div class="quiz-answer-item">
                        <input type="radio" name="${answer}">
                        <label>${answer}</label>
                    </div>
            `
        })

    html += `
    <div class="quiz-item" id="${quiz.id}">
    <h3>${quiz.question}</h3>
    <div class="quiz-answer">
        ${html2}
    </div>
    </div>
        `;
   });
   quizContainer.innerHTML = html;
} 


renderQuiz(quizes);
console.log(quizContainer);

//2. Khi bấm vào nút “Random Answer”
const btnRandom = document.getElementById("btn");

btnRandom.addEventListener("click", () => {
    quizes.forEach(quiz => {
        const quizId = document.getElementById(quiz.id); // tìm tới câu hỏi hiện tại 
        const randomAnswerIndex = Math.floor(Math.random() * quiz.answers.length); //random câu trả lời
        const quizAnswerDiv = quizId.querySelector(`input[type="radio"][name="${quiz.answers[randomAnswerIndex]}"]`);
        
        // Đặt lại trạng thái chọn của tất cả các phần tử radio trong câu hỏi
        const allRadioInputs = quizId.querySelectorAll('input[type="radio"]');
        allRadioInputs.forEach(input => {
            input.checked = false;
        });
        
        quizAnswerDiv.checked = true;
    })  
});
