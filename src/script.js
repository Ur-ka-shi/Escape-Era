// ==========================================
// 1. SCROLL REVEAL (FADE-IN ANIMATIONS)
// ==========================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.1 });

// Safe check: Only run if these elements exist on the current page
const animatedElements = document.querySelectorAll(".card, .review-item, .caption, .intro");
if (animatedElements.length > 0) {
    animatedElements.forEach(el => {
        el.classList.add("hidden");
        observer.observe(el);
    });
}

// ==========================================
// 2. BACK TO TOP BUTTON
// ==========================================
const topBtn = document.getElementById("topBtn");

if (topBtn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
}

// ==========================================
// 3. CARD INTERACTION TRANSITIONS
// ==========================================
const cards = document.querySelectorAll(".card");

if (cards.length > 0) {
    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-12px) scale(1.04)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0) scale(1)";
        });
    });
}

// ==========================================
// 4. REAL-TIME DESTINATION SEARCH
// ==========================================
const search = document.getElementById("search");

if (search) {
    search.addEventListener("keyup", () => {
        const value = search.value.toLowerCase();
        
        document.querySelectorAll(".cards .card").forEach(card => {
            const text = card.innerText.toLowerCase();
            card.style.display = text.includes(value) ? "block" : "none";
        });
    });
}

// ==========================================
// 5. LOGIN CLIENT-SIDE ROUTING CONTROLLER
// ==========================================
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        window.location.href = "Homepage.html"; 
    });
}

// ==========================================
// 6. INTERACTIVE PASSWORD VISIBILITY TOGGLE
// ==========================================
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

if (togglePassword && passwordInput) {
    togglePassword.addEventListener("click", () => {
        const currentType = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", currentType);
        
        togglePassword.classList.toggle("fa-eye");
        togglePassword.classList.toggle("fa-eye-slash");
    });
}

// ==========================================
// 7. CLIENT-SIDE CONTACT FORM CAPTURE
// ==========================================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); 
        alert("Thank you! Your message has been received.");
        contactForm.reset(); 
    });
}