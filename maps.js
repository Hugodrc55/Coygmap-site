    const popup = document.getElementById('newsletterPopup');
    const closeBtn = document.querySelector('.popup-close');
    const subscribeBtn = document.querySelector('.subscribe-btn');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const mapCards = document.querySelectorAll('.map-card');
    
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

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        
        filterBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');
        
        mapCards.forEach(card => {
          if (filter === 'all' || card.dataset.category === filter) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });