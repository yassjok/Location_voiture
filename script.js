function changeImage(el) {
    document.getElementById("mainImage").src = el.src;
  }

  function scrollToBooking() {
    const section = document.querySelector('.alternating');
    section.scrollIntoView({ behavior: 'smooth' });
  }

    // Rebuild containers with 3 cars per row
    let currentContainer = document.createElement('div');
    currentContainer.className = 'container';
    carSection.appendChild(currentContainer);

    allCards.forEach((card, index) => {
        if (index % 3 === 0 && index !== 0) {
            currentContainer = document.createElement('div');
            currentContainer.className = 'container';
            carSection.appendChild(currentContainer);
        }
        currentContainer.appendChild(card);
    });
    
 