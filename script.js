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
    
  const reviews = [
    {
      text: "Absolutely Perfect  cars! I felt like royalty. The whole process was seamless and luxurious.",
      name: "Ahmed ",
    },
    {
      text: "EliteDrive made our wedding unforgettable. Classy cars, top service!",
      name: "Fatima ",
    },
    {
      text: "Professional staff and pristine vehicles. Will definitely rent again for business trips.",
      name: "Khalid ",
    },
    {
      text: " The Best Services ever , The only Componies That Provide this Type Of Cars  ",
      name: "Salma",
    }
  ];
  
  let currentReview = 0;
  
  function renderReview(index) {
    const container = document.getElementById("reviews-container");
    const review = reviews[index];
    const stars = "★".repeat(review.stars) + "☆".repeat(5 - review.stars);
  
    container.innerHTML = `
      <div class="review-card">
        <p class="review-text">"${review.text}"</p>
        <div class="reviewer-name">- ${review.name}-</div>
        <div class="stars">${stars}</div>
      </div>
    `;
  }
  
  function nextReview() {
    currentReview = (currentReview + 1) % reviews.length;
    renderReview(currentReview);
  }
  
  function prevReview() {
    currentReview = (currentReview - 1 + reviews.length) % reviews.length;
    renderReview(currentReview);
  }
  
  window.onload = () => renderReview(currentReview);
  