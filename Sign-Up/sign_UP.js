document.addEventListener('DOMContentLoaded', function() {
    const signUpForm = document.querySelector('form');
  
    signUpForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const usernameInput = document.querySelector('input[name="username"]');
      const emailInput = document.querySelector('input[name="email"]');
      const passwordInput = document.querySelector('input[name="password"]');
      const confirmPasswordInput = document.querySelector('input[name="confirm_password"]');
      const roleSelect = document.querySelector('select[role="role"]');
  
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
  
      if (roleSelect.value === '') {
        alert('Please select a role.');
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
// Function to add a new user to local storage
function addUserToLocalStorage(user) {
  // Retrieve existing user data from local storage
  const storedUserData = localStorage.getItem('userData');
  
  // Parse existing data into an array, or initialize an empty array if not found
  const usersArray = storedUserData ? JSON.parse(storedUserData) : [];
  
  // Add the new user object to the array
  usersArray.push(user);
  
  // Convert the updated array back to a JSON string
  const updatedUsersData = JSON.stringify(usersArray);
  
  // Save the updated data back to local storage
  localStorage.setItem('userData', updatedUsersData);
  console.log('User added to local storage:', updatedUsersData); // Debugging statement
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent default form submission

  // Get the form data
  const username = event.target.elements.username.value;
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  // Access role using the input field name
  const role = event.target.elements[0].value;

  // Debugging statements
  console.log('Form data:', { username, email, password, role });

  // Retrieve existing user data from local storage
  const storedUserData = localStorage.getItem('userData');
  const usersArray = storedUserData ? JSON.parse(storedUserData) : [];

  // Check if the username or email already exists in local storage
  const userExists = usersArray.some(user => user.username === username || user.email === email);
  if (userExists) {
      alert("Username or email already exists. Please use a different username or email.");
      return;
  }

  // Create a new user object
  const newUser = {
      username,
      email,
      password,
      role
  };

  // Add the new user to local storage
  addUserToLocalStorage(newUser);

  // Provide feedback to the user
  alert("Sign up successful! You can now log in.");
}

// Add event listener to the form
const form = document.querySelector('form');
form.addEventListener('submit', handleFormSubmit);
