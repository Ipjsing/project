// ============================================
// NAVIGATION FUNCTIONALITY
// ============================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        
        // Update active state
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Update active nav on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 250) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// ============================================
// FORM FUNCTIONALITY
// ============================================

const registrationForm = document.getElementById('registrationForm');
const formSteps = document.querySelectorAll('.form-step');
const progressSteps = document.querySelectorAll('.progress-step');
let currentStep = 1;

// Initialize form if on registration page
if (registrationForm) {
    initializeForm();
}

function initializeForm() {
    // Show first step
    showStep(1);
    
    // Form submit handler
    if (registrationForm) {
        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleSubmit(e);
        });
    }
}

function showStep(step) {
    // Hide all steps
    formSteps.forEach(formStep => {
        formStep.classList.remove('active');
    });
    
    // Show current step
    const currentFormStep = document.querySelector(`[data-step="${step}"]`);
    if (currentFormStep) {
        currentFormStep.classList.add('active');
    }
    
    // Update progress
    updateProgress(step);
    
    // Scroll to form
    if (window.innerWidth <= 768) {
        document.querySelector('.registration-form-container').scrollIntoView({ behavior: 'smooth' });
    }
}

function updateProgress(step) {
    progressSteps.forEach((progressStep, index) => {
        progressStep.classList.remove('active', 'completed');
        
        if (index + 1 < step) {
            progressStep.classList.add('completed');
        } else if (index + 1 === step) {
            progressStep.classList.add('active');
        }
    });
}

function goToStep(step) {
    // Validate current step before moving
    if (step > currentStep && !validateStep(currentStep)) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    currentStep = step;
    showStep(step);
    
    // Update review if going to step 4
    if (step === 4) {
        updateReview();
    }
}

function validateStep(step) {
    const currentFormStep = document.querySelector(`[data-step="${step}"]`);
    if (!currentFormStep) return true;
    
    const inputs = currentFormStep.querySelectorAll('input[required], select[required], textarea[required]');
    
    for (let input of inputs) {
        if (!input.value.trim()) {
            input.focus();
            return false;
        }
    }
    
    return true;
}

function updateReview() {
    // Student info
    const studentFirstName = document.getElementById('studentFirstName').value;
    const studentLastName = document.getElementById('studentLastName').value;
    document.getElementById('reviewStudentName').textContent = `${studentFirstName} ${studentLastName}`;
    document.getElementById('reviewDOB').textContent = document.getElementById('dob').value;
    document.getElementById('reviewSchool').textContent = document.getElementById('school').value;
    document.getElementById('reviewClass').textContent = document.getElementById('classLevel').value;
    
    // Parent info
    const parentFirstName = document.getElementById('parentFirstName').value;
    const parentLastName = document.getElementById('parentLastName').value;
    document.getElementById('reviewParentName').textContent = `${parentFirstName} ${parentLastName}`;
    document.getElementById('reviewParentPhone').textContent = document.getElementById('parentPhone').value;
    document.getElementById('reviewParentEmail').textContent = document.getElementById('parentEmail').value;
    document.getElementById('reviewParentAddress').textContent = document.getElementById('parentAddress').value;
    
    // Service details
    document.getElementById('reviewTerm').textContent = document.getElementById('term').value;
    document.getElementById('reviewPickup').textContent = document.getElementById('pickupPoint').value;
    document.getElementById('reviewTransport').textContent = document.getElementById('transportType').value;
    
    const months = document.getElementById('month').value;
    document.getElementById('reviewDuration').textContent = `${months} Month(s)`;
    
    // Calculate costs
    calculateCosts();
}

function calculateCosts() {
    const transportType = document.querySelector('input[name="transportType"]:checked').value;
    const months = parseInt(document.getElementById('month').value) || 0;
    
    let monthlyFee = 0;
    if (transportType.includes('One-way')) {
        monthlyFee = 8000;
    } else {
        monthlyFee = 12500;
    }
    
    const totalAmount = monthlyFee * months;
    
    document.getElementById('monthlyFee').textContent = `₦${monthlyFee.toLocaleString()}`;
    document.getElementById('durationDisplay').textContent = `${months} Month(s)`;
    document.getElementById('totalAmount').textContent = `₦${totalAmount.toLocaleString()}`;
}

function updateTermPrice() {
    // This can be used to update pricing based on term selection
    const term = document.getElementById('term').value;
    // Currently all terms are ₦12,500, but this can be modified if needed
}

function toggleDisabilityField() {
    const checkbox = document.getElementById('hasDisability');
    const field = document.getElementById('disabilityField');
    field.style.display = checkbox.checked ? 'block' : 'none';
}

function handleSubmit(event) {
    event.preventDefault();
    
    if (!document.querySelector('input[name="agreeTerms"]').checked) {
        showNotification('Please agree to terms and conditions', 'error');
        return;
    }
    
    // Collect form data
    const formData = new FormData(registrationForm);
    const data = Object.fromEntries(formData);
    
    // Store in localStorage (for demo purposes)
    localStorage.setItem('studentRegistration', JSON.stringify(data));
    
    // Show success message
    showNotification('Registration completed successfully! You will receive a confirmation email shortly.', 'success');
    
    // Redirect after 2 seconds
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 16px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 1000;
            animation: slideIn 0.3s ease;
            max-width: 400px;
        }
        
        .notification-success {
            background-color: #10b981;
            color: white;
        }
        
        .notification-error {
            background-color: #ef4444;
            color: white;
        }
        
        .notification-info {
            background-color: #2563eb;
            color: white;
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @media (max-width: 480px) {
            .notification {
                left: 10px;
                right: 10px;
            }
        }
    `;
    
    if (!document.querySelector('style[data-notification]')) {
        style.setAttribute('data-notification', 'true');
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// ============================================
// SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href === '#') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// FORM INTERACTIONS
// ============================================

// Update total cost when transport type, duration, or term changes
document.addEventListener('change', (e) => {
    if (e.target.name === 'transportType' || e.target.name === 'month' || e.target.id === 'term') {
        calculateCosts();
    }
});

// ============================================
// PAGE LOAD
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Load stored data if returning to page
    const storedData = localStorage.getItem('studentRegistration');
    if (storedData && registrationForm) {
        // Could pre-fill form here if needed
    }
});

// ============================================
// CONTACT FORM
// ============================================

const quickForms = document.querySelectorAll('.quick-form form');
quickForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Thank you! We will respond to your inquiry shortly.', 'success');
        form.reset();
    });
});

// ============================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================

// Add keyboard navigation for forms
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
        if (currentStep < 4) {
            goToStep(currentStep + 1);
        } else if (registrationForm) {
            registrationForm.dispatchEvent(new Event('submit'));
        }
    }
});

// Add focus indicators
document.querySelectorAll('input, select, textarea, button, a').forEach(element => {
    element.addEventListener('focus', function() {
        this.setAttribute('data-focus', 'true');
    });
    
    element.addEventListener('blur', function() {
        this.removeAttribute('data-focus');
    });
});

// ============================================
// PRINT FUNCTIONALITY
// ============================================

function printRegistration() {
    window.print();
}

// ============================================
// RESPONSIVE ADJUSTMENTS
// ============================================

// Adjust nav for responsive
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
    }
});

console.log('Bonny Island School Bus Transport - Website Loaded Successfully');
