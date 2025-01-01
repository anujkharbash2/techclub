
    document.addEventListener('DOMContentLoaded', () => {
        const toggleButton = document.querySelector('.toggle-button');
        const navLinks = document.querySelector('.nav-links');

        toggleButton.addEventListener('click', () => {
            navLinks.classList.toggle('open'); // Add or remove 'open' class
        });
    });


    function handleSubmit(event) {
        event.preventDefault(); // Prevent default form submission
        alert('Your message has been sent successfully!'); // Show alert to user
        window.location.href = '/contactus.html'; // Redirect to homepage
    }
