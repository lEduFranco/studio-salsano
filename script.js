document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', function() {
          mobileMenu.classList.toggle('active');
          
          const spans = mobileMenuButton.querySelectorAll('span');
          spans.forEach(span => span.classList.toggle('active'));
          
          if (mobileMenu.classList.contains('active')) {
              spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
              spans[1].style.opacity = '0';
              spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
          } else {
              spans[0].style.transform = 'none';
              spans[1].style.opacity = '1';
              spans[2].style.transform = 'none';
          }
      });
  }
  
  if (mobileMenu) {
      const mobileLinks = mobileMenu.querySelectorAll('a');
      mobileLinks.forEach(link => {
          link.addEventListener('click', function() {
              mobileMenu.classList.remove('active');
              
              const spans = mobileMenuButton.querySelectorAll('span');
              spans.forEach(span => span.classList.remove('active'));
              spans[0].style.transform = 'none';
              spans[1].style.opacity = '1';
              spans[2].style.transform = 'none';
          });
      });
  }
  
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');
  
  if (contactForm && formMessage) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const city = document.getElementById('city').value;
          const state = document.getElementById('state').value;
          const message = document.getElementById('message').value;
          
          if (!name || !email || !city || !state) {
              formMessage.textContent = 'Por favor, preencha todos os campos obrigatórios.';
              formMessage.className = 'form-message error';
              return;
          }
          
          contactForm.reset();
          formMessage.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
          formMessage.className = 'form-message success';
          
          setTimeout(() => {
              formMessage.className = 'form-message';
          }, 5000);
      });
  }
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
          }
      });
  });
});