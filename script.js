// 📌 Логіни та паролі
const users = {
    "student": "1234",
    "teacher": "admin"
};

// 📌 Авторизація
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (users[username] && users[username] === password) {
        localStorage.setItem("loggedUser", username);
        document.getElementById("loginScreen").classList.add("hidden");

        if (username === "student") {
            document.getElementById("studentPanel").classList.remove("hidden");
            getHomework();
        } else if (username === "teacher") {
            document.getElementById("teacherPanel").classList.remove("hidden");
            getAnswer();
        }
    } else {
        alert("Невірний логін або пароль!");
    }
}

// 📌 Збереження домашнього завдання (видно учню)
function saveHomework() {
    const homeworkText = document.getElementById("homeworkInput").value;
    localStorage.setItem("homework", homeworkText);
    document.getElementById("homeworkMessage").innerText = "Завдання збережено!";
}

// 📌 Отримання домашнього завдання
function getHomework() {
    const homework = localStorage.getItem("homework");
    document.getElementById("homeworkDisplay").innerText = homework ? homework : "Немає завдання";
}

// 📌 Збереження відповіді учня (видно хрещеній)
function saveAnswer() {
    const answerText = document.getElementById("answerInput").value;
    localStorage.setItem("studentAnswer", answerText);
    document.getElementById("answerMessage").innerText = "Відповідь відправлена!";
}

// 📌 Отримання відповіді учня
function getAnswer() {
    const answer = localStorage.getItem("studentAnswer");
    document.getElementById("answerDisplay").innerText = answer ? answer : "Немає відповіді";
}

// 📌 Автоматичне входження при перезавантаженні сторінки
document.addEventListener("DOMContentLoaded", () => {
    const loggedUser = localStorage.getItem("loggedUser");
    if (loggedUser) {
        login(loggedUser);
    }
});
