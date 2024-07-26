
    const popup = document.getElementById('newsletterPopup');
    const closeBtn = document.querySelector('.popup-close');
    const subscribeBtn = document.querySelector('.subscribe-btn');
    
    function showPopup() {
      popup.classList.add('show');
    }

    function hidePopup() {
      popup.classList.remove('show');
    }

    setTimeout(showPopup, 3000);

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

    