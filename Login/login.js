/////showPassword/////
const passowrdInput = document.getElementById('password');
const showpassowrd = document.getElementById('showPassword');
const form = document.querySelector('form');

showpassowrd.addEventListener('change',function(){

    if (this.checked) {
        passowrdInput.type = 'text';
    }
    else
    {
        passowrdInput.type = 'password';
    }

});
////////validation//////////

const nameValue = document.querySelector('input[name = "userInput"]');
const passwordValue = document.querySelector('input[name="password"]');

const passwordvalid = {
    minlenght: 8,
    regex: /(?=.*[a-zA-Z])(?=.*\d).+/
};

const namevalid = {
    regex: /^[a-zA-Z\s]+$/
};
///////////////////////////

form.addEventListener('submit', function(event) {
    const namein = nameValue.value;
    if (namein === '' || !namevalid.regex.test(namein)) {
        document.getElementById("user-error").textContent = "Invalid Username";
        event.preventDefault();
    }

    const passwordin = passwordValue.value;
    if (passwordin === '' || passwordin.length < passwordvalid.minlenght || !passwordvalid.regex.test(passwordin) ) {
        document.getElementById("password-error").textContent = "Invalid password";
        event.preventDefault();
    }
});


// Function to handle form submission
function handleLoginFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the submitted form data
    const username = event.target.elements.userInput.value;
    const password = event.target.elements.password.value;

    // Retrieve existing user data from local storage
    const storedUserData = localStorage.getItem('userData');
    const usersArray = storedUserData ? JSON.parse(storedUserData) : [];

    // Check if the submitted username and password match an existing user
    const user = usersArray.find(user => user.username === username && user.password === password);

    if (user) {
        // Redirect the user to the home page or other appropriate page
        window.location.href = "file:///D:/project/learning%20web/Online%20Library%20website/Phase_2/Home%20Page/Home_Page.html";
    } else {
        // User not found or credentials do not match
        alert("Invalid username or password. Please try again.");
    }
}

// Add event listener to the form
form.addEventListener('submit', handleLoginFormSubmit);
