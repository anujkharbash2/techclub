
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
        window.location.href = '/contactus.html'; 
    }

    const handleSubmit = event => {
        event.preventDefault();
      
        const myForm = event.target;
        const formData = new FormData(myForm);
      
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString()
        })
          .then(() => console.log("Form successfully submitted"))
          .catch(error => alert(error));
      };
      
      document.querySelector("form").addEventListener("submit", handleSubmit);
