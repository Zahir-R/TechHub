document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const passwordInput = document.getElementById('password');
    const passwordFeedback = document.getElementById('passwordFeedback');
    const signupToast = document.getElementById('signupToast');

    if (signupForm) {
        passwordInput.addEventListener('input', () => {
            if (passwordInput.value.length > 0 && passwordInput.value.length < 8) {
                passwordFeedback.style.display = 'block';
            } else {
                passwordFeedback.style.display = 'none';
            }
        });
        signupForm.addEventListener('submit', e => {
            if (passwordInput.value.length < 8) {
                e.preventDefault();
                passwordFeedback.style.display = 'block';
                passwordInput.focus();
            } else {
                const modal = bootstrap.Modal.getInstance(document.getElementById('signupModal'));
                modal.hide();
                const toast = new bootstrap.Toast(signupToast);
                toast.show();
                signupForm.reset();
            }
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;        
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;            
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    signupForm.addEventListener('submit', e => {
        if (passwordInput.value.length < 8) {
            e.preventDefault();
            passwordFeedback.style.display = 'block';
            passwordInput.focus();
        } else {
            const modal = bootstrap.Modal.getInstance(document.getElementById('signupModal'));
            modal.hide();
            const toast = new bootstrap.Toast(document.getElementById('signupToast'));
            toast.show();
            signupForm.reset();
        }
    });
});