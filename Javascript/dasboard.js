(function() {


    function formatTime(d) {
        return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }

    function initClock() {
        const clockEl = document.getElementById('sf-clock');
        if (!clockEl) return;

        function tick() {
            const now = new Date();
            clockEl.textContent = formatTime(now);
        }
        tick();
        setInterval(tick, 1000);
    }

    //  Time-based Greetings
    function initGreeting() {
        const greetingEl = document.getElementById('sf-greeting');
        if (!greetingEl) return;

        function updateGreeting() {
            const now = new Date();
            const hour = now.getHours();
            let greeting = '';

            if (hour >= 5 && hour < 12) {
                greeting = 'Good morning';
            } else if (hour >= 12 && hour < 17) {
                greeting = 'Good afternoon';
            } else if (hour >= 17 && hour < 21) {
                greeting = 'Good evening';
            } else {
                greeting = 'Good night';
            }

            // Name will be changed to actual user [ if we connect system to database]
            greetingEl.textContent = greeting + ', Mugisha! We are glad to have you here.';
        }

        updateGreeting();
        // updating greeting, every second
        setInterval(updateGreeting, 60000);
    }

    // Dark / Light Theme Toggle 
    function initThemeToggle() {
        const btn = document.getElementById('sf-theme-toggle');
        if (!btn) return;

        const STORAGE_KEY = 'sf-theme';

        function applyTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            btn.textContent = theme === 'dark' ? 'Light' : 'Dark';
            localStorage.setItem(STORAGE_KEY, theme);
        }

        // Load saved theme or default to 'light'
        const saved = localStorage.getItem(STORAGE_KEY) || 'light';
        applyTheme(saved);

        btn.addEventListener('click', function() {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            applyTheme(next);
        });
    }

    function initProfileMenu() {
        const btn = document.getElementById('sf-profile-button');
        const menu = document.getElementById('sf-profile-menu');
        if (!btn || !menu) return;

        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            menu.classList.toggle('open');
        });

        document.addEventListener('click', function() {
            menu.classList.remove('open');
        });
    }
    // Humburger Menu for Mobile device users 

    function initMobileMenu() {
        const toggle = document.getElementById('sf-menu-toggle');
        const navLinks = document.querySelectorAll('.nav-link');
        if (!toggle) return;

        toggle.addEventListener('click', function() {
            document.body.classList.toggle('sf-menu-open');
        });

        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                document.body.classList.remove('sf-menu-open');
            });
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        initClock();
        initThemeToggle();
        initGreeting();
        initProfileMenu();
        initMobileMenu();
    });

})();