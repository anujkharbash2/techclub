
    document.addEventListener('DOMContentLoaded', () => {
        const toggleButton = document.querySelector('.toggle-button');
        const navLinks = document.querySelector('.nav-links');

        toggleButton.addEventListener('click', () => {
            navLinks.classList.toggle('open'); // Add or remove 'open' class
        });
    });





    const handleSubmit = async event => {
      event.preventDefault();
  
      const myForm = event.target;
      const formData = new FormData(myForm);
  
      try {
          const response = await fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: new URLSearchParams(formData).toString(),
          });
  
          if (!response.ok) {
              throw new Error("Failed to submit the form.");
          }
  
          
          alert("Form successfully submitted");
          
          
          myForm.reset();  
          location.reload();  
      } catch (error) {
          alert("Error: " + error.message);  
      }
  };
  
  // Attach the event listener to the form
  document.querySelector("form").addEventListener("submit", handleSubmit);

  








// Select all buttons with the class 'alert-trigger'
const alertButtons = document.querySelectorAll('.alert-trigger');

// Add an event listener to each button
alertButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        alert('Registration link is not available for this event.');
    });
});

