let session = new Session();
session = session.getSession();

if (session!== ""){
    window.location.href =  'mainpage.html';

}



document.getElementById("registration").addEventListener("click", function() {
    //Hides login form
    document.querySelector(".container").style.display = "none";

    // Show singup background with animation
    const signupBackground = document.querySelector(".signupBackground");
    signupBackground.style.display = "flex";
    setTimeout(function() {
        signupBackground.style.opacity = "1";
        signupBackground.style.transform = "translateY(0)";
    },100);

    // Disabble scrool
    
    document.body.style.overflow = "hidden";


    setTimeout(function() {
        signupBackground.scrollIntoView({ behavior: "smooth" });
    }, 500); // Pause with half seconds
});

document.getElementById("closeModal").addEventListener("click", function() {
    // Hide singupbackground with animation
    const signupBackground = document.querySelector(".signupBackground");
    signupBackground.style.opacity = "0";
    signupBackground.style.transform = "translateY(100%)";
    
    // Disable scrool after transition
    setTimeout(function() {
        signupBackground.style.display = "none";
        document.querySelector(".container").style.display = "flex";
        document.body.style.overflow = "auto";
        // Vratite se na vrh stranice
        document.querySelector(".container").scrollIntoView({ behavior: "smooth" });
    }, 500); // Waiting for animation before coming back to login page
});






document.getElementById("registrationForm").addEventListener("submit", (e) => {
    e.preventDefault(); // Prevents form submission before validation

   
    const username = document.getElementById("user-name").value.trim();
    const nameLastName = document.getElementById("Name-and-lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("register-password").value;
    const repeatPassword = document.getElementById("repeat-password").value;
    const gender = document.querySelector('input[name="gender"]:checked'); // Selected gender
    const language = document.querySelector('.language-selection').value.trim(); // Selected language 



    // Minimum and maximum character limits
    const minChar = 3;
    const maxChar = 20;
    const passwordMinChar = 6;

    let valid = true;

    // Validate Username
    if (username.length < minChar || username.length > maxChar) {
        document.getElementById("user-name-error").textContent = `Username must be between ${minChar} and ${maxChar} characters.`;
        valid = false;
    } else {
        document.getElementById("user-name-error").textContent = "";
    }

    // Validate Name and Last Name
    if (nameLastName.length < minChar || nameLastName.length > maxChar) {
        document.getElementById("name-lastname-error").textContent = `Name and Last Name must be between ${minChar} and ${maxChar} characters.`;
        valid = false;
    } else {
        document.getElementById("name-lastname-error").textContent = "";
    }

    // Validate Email (basic check)
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        // Ako je email validan
        document.getElementById("email-error").textContent = "";
    } else {
        // Ako email nije validan
        document.getElementById("email-error").textContent = "Please enter a valid email address.";
        valid = false;
    }
    

    // Validate Password
    if (password.length < passwordMinChar) {
        document.getElementById("password-error").textContent = `Password must be at least ${passwordMinChar} characters long.`;
        valid = false;
    } else {
        document.getElementById("password-error").textContent = "";
    }

    // Validate Repeat Password
    if (password !== repeatPassword) {
        document.getElementById("repeat-password-error").textContent = "Passwords do not match.";
        valid = false;
    } else {
        document.getElementById("repeat-password-error").textContent = "";
    }

    // Validate Gender
    if (!gender) {
        document.getElementById("gender-error").textContent = "Please select your gender.";
        valid = false;
    } else {
        document.getElementById("gender-error").textContent = "";
    }

    // Validate Language (datalist selection)
    if (language === "") {
        document.getElementById("language-error").textContent = "Please select a language.";
        valid = false;
    } else {
        document.getElementById("language-error").textContent = "";
    }

    // If all fields are valid, proceed with profile creation
    if (valid) {
        user = new Users();
        user.username = document.querySelector('#user-name').value;
        user.email = document.querySelector('#email').value;
        user.password = document.querySelector('#register-password').value;
        user.create();

        // Reset the form after successful registration
        document.getElementById("registrationForm").reset();
    }
});




document.querySelector('#loginForm').addEventListener('submit', e => {
    e.preventDefault();

    let email = document.querySelector('#login-email').value;
    let password = document.querySelector('#login-password').value; 

    let user = new Users();
    user.email = email;
    user.password = password;
    user.login();
});










