 
// Greeting function based on time
function greetUser() {
    const now = new Date();
    const hour = now.getHours();
    let message = "";

    if (hour < 12) {
        message = "Good Morning!";
    } else if (hour < 18) {
        message = "Good Afternoon!";
    } else {
        message = "Good Evening!";
    }

    alert(message + " Welcome to Frank Chengula's Portfolio Website.");
}

// Dark Mode Toggle
function toggleDarkMode() {
    const body = document.body;
    const isDark = body.classList.toggle('dark-mode');
    
    // Optionally save preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Apply saved theme on load
window.onload = function () {
    greetUser();
    
    /*const*/ savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
};