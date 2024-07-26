const popup = document.getElementById('newsletterPopup');
const closeBtn = document.querySelector('.popup-close');
const subscribeBtn = document.querySelector('.subscribe-btn');
const contactForm = document.querySelector('.contact-form');
    
    function showPopup() {
      popup.classList.add('show');
    }

    function hidePopup() {
      popup.classList.remove('show');
    }

    

    closeBtn.addEventListener('click', hidePopup);
    subscribeBtn.addEventListener('click', showPopup);

    popup.addEventListener('click', function(event) {
      if (event.target === popup) {
        hidePopup();
      }
    });

    document.querySelector('.popup-form').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Merci de vous être abonné à notre newsletter !');
      hidePopup();
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        console.log('Données du formulaire:', data);
        alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
        contactForm.reset();
      });