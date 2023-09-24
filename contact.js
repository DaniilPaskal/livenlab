const SERVICE_ID = 'service_1brfnxf';
const TEMPLATE_ID = 'template_1kfhe66';
const USER_ID = '7PX90rf6YM9qXhPH7';

(function() {
    emailjs.init(USER_ID);

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
            .then(function() {
                Swal.fire({
                    icon: 'success',
                    title: 'Thank you for reaching out!',
                    text: 'We will get back to you as soon as possible.',
                    customClass: {popup: 'form-alert', confirmButton: 'form-alert-button'}
                })
            }, function(error) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Something went wrong.',
                    text: `We're sorry, this email could not be sent.`,
                    customClass: {popup: 'form-alert', confirmButton: 'form-alert-button'}
                })
            });
            event.target.reset();
    });     
})();