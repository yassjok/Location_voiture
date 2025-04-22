

function changeImage(el) {
    document.getElementById("mainImage").src = el.src;
  }

  function scrollToBooking() {
    const section = document.querySelector('.alternating');
    section.scrollIntoView({ behavior: 'smooth' });
  }


  const reviews = [
    {
      text: "Absolutely stunning cars! I felt like royalty. The whole process was seamless and luxurious.",
      name: "Ahmed Al Mansoori",
      stars: 5,
    },
    {
      text: "EliteDrive made our wedding unforgettable. Classy cars, top service!",
      name: "Fatima Al Dhaheri",
      stars: 5,
    },
    {
      text: "Professional staff and pristine vehicles. Will definitely rent again for business trips.",
      name: "Khalid Bin Zayed",
      stars: 4,
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
        <div class="reviewer-name">- ${review.name}</div>
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
  