let mode = document.getElementById("theme");
let body = document.getElementById("bod");

const savedMode = localStorage.getItem("mode");

if (savedMode) {
    body.classList.add(savedMode);
}

mode.addEventListener('click', function() {
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        localStorage.setItem("mode", "light-mode");
    } else {
        body.classList.add("dark-mode");
        localStorage.setItem("mode", "dark-mode");
    }
});