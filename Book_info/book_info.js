document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.getElementById('reviewForm');
    const reviewContent = document.getElementById('reviewContent');
    const reviewList = document.querySelector('.review-list');
    const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('ratingInput');
  
    stars.forEach((star) => {
      star.addEventListener('click', () => {
        const value = star.getAttribute('data-value');
        ratingInput.value = value;
        updateStars(value);
      });
    });
  
    function updateStars(value) {
      stars.forEach((star) => {
        if (star.getAttribute('data-value') <= value) {
          star.classList.add('active');
        } else {
          star.classList.remove('active');
        }
      });
    }
  
    reviewForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const content = reviewContent.value.trim();
      if (content === '') {
        alert('Please enter a review.');
        return;
      }
  
      const rating = ratingInput.value;
      if (!rating) {
        alert('Please select a rating.');
        return;
      }
  
      const newReview = document.createElement('div');
      newReview.classList.add('review');
      newReview.innerHTML = `
        <p>Rating: ${rating}</p>
        <p>${content}</p>
      `;
  
      reviewList.appendChild(newReview);
  
      reviewContent.value = '';
      ratingInput.value = '';
      updateStars(0); // Reset stars
    });
  });
  