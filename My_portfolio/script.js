// Run these on window load
window.onload = () => {
    updateGreeting();
    cycleHeaderTexts();
    setupScrollEvents();
    // Remove setupFormSubmission from here since it's already called in DOMContentLoaded
};

// Show greeting based on time of day
function updateGreeting() {
    const hours = new Date().getHours();
    let greeting = "Hello there!";

    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    const greetingElement = document.querySelector(".greeting");
    if (greetingElement) {
        greetingElement.textContent = greeting;
    }
}

// Cycle "Mayank", "Kumar", "Portfolio" in nav left area
function cycleHeaderTexts() {
    const texts = ["Mayank", "Kumar's", "Portfolio"];
    const flashingHeader = document.getElementById("flashing-header");
    let index = 0;

    if (!flashingHeader) return;

    flashingHeader.textContent = texts[index];
    setInterval(() => {
        index = (index + 1) % texts.length;
        flashingHeader.textContent = texts[index];
    }, 1500);
}

// Set up scroll-related effects
function setupScrollEvents() {
    const header = document.querySelector("header");
    const backToTop = document.querySelector(".back-to-top");

    window.addEventListener("scroll", () => {
        const y = window.scrollY;

        // Add background to header when scrolling
        if (y > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        // Show or hide back-to-top button
        if (y > 500) {
            backToTop.classList.add("active");
        } else {
            backToTop.classList.remove("active");
        }
    });

    // Smooth scroll for nav and footer links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            if (href === "#") return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        });
    });
}

// Handle contact form submit using EmailJS
function setupFormSubmission() {
    // Check if the function has already run to prevent duplicate listeners
    if (window.formSetupComplete) return;

    emailjs.init("Vo2RU2dmVW_TsqnVv"); // Your EmailJS User ID

    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim() || "No Subject";
        const message = document.getElementById("message").value.trim();

        // Validate required fields
        if (!name || !email || !message) {
            alert("Please fill out all required fields.");
            return;
        }

        // Disable submit button to prevent multiple submissions
        const submitButton = form.querySelector('button[type="submit"]');
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Sending...";
        }

        // Debug - check values before sending
        console.log("Sending email with values:", { name, email, subject, message });

        const templateParams = {
            name: name,
            email: email,
            subject: subject,
            message: message
        };

        // Show sending status
        alert(`Thank you for your message, ${name}! I will get back to you soon.`);

        emailjs.send("service_68tm4ry", "template_f0xhqx8", templateParams)
            .then(response => {
                console.log("Email sent successfully:", response);
                form.reset();
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = "Send Message";
                }
            })
            .catch(error => {
                console.error("Email error:", error);
                alert("Oops! Something went wrong sending your email. Please try again later.");
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = "Send Message";
                }
            });
    });

    // Mark the form setup as complete
    window.formSetupComplete = true;
}

// Fade in sections on scroll using IntersectionObserver
document.addEventListener("DOMContentLoaded", () => {
    // Set up form submission
    setupFormSubmission();

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".section").forEach(section => {
        observer.observe(section);
    });
});

// Mobile menu functionality
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.querySelector('nav .right ul');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuLinks = document.querySelectorAll('nav .right ul li a');
    
    if (!mobileMenuBtn || !navMenu || !menuOverlay) return;
    
    // Toggle menu on button click
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        
        // Change icon based on menu state
        const icon = mobileMenuBtn.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Close menu when clicking overlay
    menuOverlay.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.classList.remove('menu-open');
        
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
    
    // Close menu when clicking links
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.classList.remove('menu-open');
            
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// Add this function call to your window.onload or DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    // Your existing code
    setupMobileMenu(); // Add this line
});