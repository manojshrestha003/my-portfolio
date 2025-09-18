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


  const typingText = document.getElementById('typing-text');
const typingStrings = [
   "An Aspiring Full Stack Developer",
   "Mern Stack",
   "ASP.NET Core"
   
];
let typingIdx = 0;
let stringIdx = 0;
let isDeleting = false;

function typeWriter() {
  const currentString = typingStrings[stringIdx];

  if (!isDeleting && typingIdx === 0) typingText.textContent = "";

  if (!isDeleting && typingIdx < currentString.length) {
    typingText.textContent += currentString.charAt(typingIdx);
    typingIdx++;
    setTimeout(typeWriter, 110);
  } else if (isDeleting && typingIdx > 0) {
    typingText.textContent = currentString.substring(0, typingIdx - 1);
    typingIdx--;
    setTimeout(typeWriter, 60);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeWriter, 1200); 
    } else {
      isDeleting = false;
      stringIdx = (stringIdx + 1) % typingStrings.length;
      setTimeout(typeWriter, 400); 
    }
  }
}

window.addEventListener('DOMContentLoaded', typeWriter);



  