const toggleIcon = document.querySelector('.toggle-icon');
const navLinks = document.querySelector('.navbar ul');

toggleIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

document.querySelectorAll('nav ul li a ').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
          targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
          });
      }
  });
});

const form = document.getElementById('contactForm');
  const statusDiv = document.getElementById('formStatus');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        statusDiv.style.color = 'white';
        statusDiv.textContent = "Thank you!  Message has been sent successfully.";
        form.reset();
      } else {
        const data = await response.json();
        statusDiv.style.color = 'red';
        statusDiv.textContent = data?.error || "Oops! Something went wrong.";
      }
    } catch (error) {
      statusDiv.style.color = 'red';
      statusDiv.textContent = "Oops! Network error. Please try again later.";
    }
  });
