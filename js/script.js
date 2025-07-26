document.addEventListener('DOMContentLoaded', function() {
    const referralSelect = document.getElementById('referral');
    const otroReferralDiv = document.getElementById('otro-referral');
    const contactForm = document.getElementById('contact-form');

    referralSelect.addEventListener('change', function() {
        if (this.value === 'otro') {
            otroReferralDiv.style.display = 'block';
        } else {
            otroReferralDiv.style.display = 'none';
        }
    });

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Mensaje enviado');
        contactForm.reset();
        otroReferralDiv.style.display = 'none';
    });
});