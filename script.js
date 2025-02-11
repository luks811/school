// Користувачі (логіни та паролі)
const users = {
    "hreschena": "teacher123",  // Логін хрещеної
    "uchyn": "student123"        // Логін учня
};

// 🔹 Вхід у систему
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (users[username] && users[username] === password) {
        localStorage.setItem("loggedUser", username);
        showPanel(username);
    } else {
        alert("Невірний логін або пароль");
    }
}

// 🔹 Відображення панелі відповідно до ролі
function showPanel(username) {
    document.getElementById("login-form").classList.add("hidden");

    if (username === "hreschena") {
        document.getElementById("teacher-panel").classList.remove("hidden");
        loadHomework();
        loadStudentAnswer();
    } else if (username === "uchyn") {
        document.getElementById("student-panel").classList.remove("hidden");
        loadHomework();
    }
}

// 🔹 Функція виходу
function logout() {
    localStorage.removeItem("loggedUser");
    location.reload();
}

// 🔹 Хрещена створює завдання
function saveHomework() {
    const homework = document.getElementById("homework-text").value;
    localStorage.setItem("homework", homework);
    alert("Завдання збережено!");
}

// 🔹 Завантаження завдання (бачить учень)
function loadHomework() {
    const homework = localStorage.getItem("homework");
    if (homework) {
        document.getElementById("homework-display").innerText = homework;
        document.getElementById("homework-text").value = homework;
    }
}

// 🔹 Учень відправляє відповідь
function sendAnswer() {
    const answer = document.getElementById("student-answer-text").value;
    localStorage.setItem("studentAnswer", answer);
    alert("Відповідь надіслана!");
}

// 🔹 Хрещена бачить відповідь учня
function loadStudentAnswer() {
    const answer = localStorage.getItem("studentAnswer");
    if (answer) {
        document.getElementById("student-answer").innerText = answer;
    }
}

// 🔹 Перевіряємо, чи хтось уже залогінений
document.addEventListener("DOMContentLoaded", () => {
    const loggedUser = localStorage.getItem("loggedUser");
    if (loggedUser) {
        showPanel(loggedUser);
    }
});
