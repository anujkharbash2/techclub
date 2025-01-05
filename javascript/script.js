
    document.addEventListener('DOMContentLoaded', () => {
        const toggleButton = document.querySelector('.toggle-button');
        const navLinks = document.querySelector('.nav-links');

        toggleButton.addEventListener('click', () => {
            navLinks.classList.toggle('open'); // Add or remove 'open' class
        });
    });


    // function handleSubmit(event) {
    //     event.preventDefault(); // Prevent default form submission
    //     alert('Your message has been sent successfully!'); // Show alert to user
    //     window.location.href = '/contactus.html'; 
    // }

    // const handleSubmit = event => {
    //     event.preventDefault();
      
    //     const myForm = event.target;
    //     const formData = new FormData(myForm);
      
    //     fetch("/", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //       body: new URLSearchParams(formData).toString()
    //     })
    //       .then(() => console.log("Form successfully submitted"))
    //       .catch(error => alert(error));
          
    //         window.location.href = '/contactus.html';

    //   };
      
    //   document.querySelector("form").addEventListener("submit", handleSubmit);





    const handleSubmit = async event => {
      event.preventDefault(); // Prevent the default form submission behavior
  
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
  
          // Notify user of successful submission
          alert("Form successfully submitted");
          
          // Optionally, reset the form and reload the page
          myForm.reset();  // Reset form fields
          location.reload();  // Reload the page (if needed)
      } catch (error) {
          alert("Error: " + error.message);  // Show detailed error message
      }
  };
  
  // Attach the event listener to the form
  document.querySelector("form").addEventListener("submit", handleSubmit);
  