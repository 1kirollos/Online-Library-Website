document.addEventListener('DOMContentLoaded', function() {
    const signUpForm = document.querySelector('form');
  
    signUpForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const usernameInput = document.querySelector('input[name="username"]');
      const emailInput = document.querySelector('input[name="email"]');
      const passwordInput = document.querySelector('input[name="password"]');
      const confirmPasswordInput = document.querySelector('input[name="confirm_password"]');
  
      // Perform validation
      if (usernameInput.value.trim() === '') {
        alert('Please enter a username.');
        return;
      }
  
      if (emailInput.value.trim() === '') {
        alert('Please enter an email address.');
        return;
      }
  
      if (!isValidEmail(emailInput.value.trim())) {
        alert('Please enter a valid email address.');
        return;
      }
  
      if (passwordInput.value === '') {
        alert('Please enter a password.');
        return;
      }
  
      if (confirmPasswordInput.value === '') {
        alert('Please confirm your password.');
        return;
      }
  
      console.log('Password:', passwordInput.value);
      console.log('Confirm Password:', confirmPasswordInput.value);
  
      if (passwordInput.value !== confirmPasswordInput.value) {
        alert('Passwords do not match.');
        return;
      }
  
      // If all validations pass, submit the form
      signUpForm.submit();
    });
  
    // Function to validate email format
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
});
