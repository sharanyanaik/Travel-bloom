
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = form.querySelector("input[placeholder='Name']").value.trim();
      const email = form.querySelector("input[placeholder='Email']").value.trim();
      const subject = form.querySelector("input[placeholder='Subject']").value.trim();
      const message = form.querySelector("textarea").value.trim();

      // Basic validation
      if (!name || !email || !message) {
        alert("Please fill out Name, Email, and Message fields.");
        return;
      }

      // Simulate form processing
      alert("Thank you, " + name + "! Your message has been sent.");
      form.reset(); // Clear form
    });
  });

 

