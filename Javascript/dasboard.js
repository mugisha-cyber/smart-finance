let hours = new Date().getHours();
let greeting = document.getElementById("sf-greeting");
if (hours < 12) {
    greeting.innerHTML = "Good Morning Mugisha Elise, we are glad to see you back";
} else if (hours < 18) {
    greeting.innerHTML = "Good Afternoon Mugisha Elise, we are glad to see you back";
} else {
    greeting.innerHTML = "Good Evening Mugisha Elise, we are glad to see you back";
}

// Dark mode and  light mode chaging

const btn = document.getElementById("sf-theme-Toggle");

if (localStorage.getItem("sf-theme") === "dark") {
    document.body.classList.add("dark");
    btn.textContent = "Light";
}

btn.addEventListener("click", function() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("sf-theme", "dark");
        btn.textContent = "Light";
    } else {
        localStorage.setItem("sf-theme", "light");
        btn.textContent = "Dark";
    }
});