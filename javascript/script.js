
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





    const handleSubmit = event => {
        event.preventDefault(); // Prevent the default form submission behavior
      
        const myForm = event.target;
        const formData = new FormData(myForm);
      
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString()
        })
          .then(() => {
            alert("Form successfully submitted"); // Show alert after successful submission
            location.reload(); // Refresh the page
          })
          .catch(error => alert(error)); // Show error alert if something goes wrong
      };
      
      // Attach the event listener to the form
      document.querySelector("form").addEventListener("submit", handleSubmit);
      