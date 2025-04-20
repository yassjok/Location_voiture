

function changeImage(el) {
    document.getElementById("mainImage").src = el.src;
  }

  function scrollToBooking() {
    const section = document.querySelector('.alternating');
    section.scrollIntoView({ behavior: 'smooth' });
  }

