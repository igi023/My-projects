//HEADER PART Startst
document.addEventListener('DOMContentLoaded', function() {
    // Kreiraj instancu sesije
    let session = new Session();
    
    // Proveri stanje sesije
    let sessionValue = session.getSession();
    
    // Dobavi dugmad
    const signInButton = document.querySelector('#singinButton');
    const myAccountButton = document.querySelector('.MyAccount');
    const profilePicture = document.querySelectorAll('#profilePicture, #profile-li-picture, #conectChat');
    const story = document.querySelector('.story');
    
    // Manipuliši vidljivošću dugmadi na osnovu sesije
    if (sessionValue !== "") {
        // Ako je sesija aktivna, sakrij 'Sign In' dugme i prikaži 'My Account' dugme
        signInButton.style.display = 'none';
        myAccountButton.style.display = 'block';
    } else {
        // Ako sesija nije aktivna, prikaži 'Sign In' dugme i sakrij 'My Account' dugme
        signInButton.style.display = 'block';
        myAccountButton.style.display = 'none';
    }

    

    story.addEventListener('click', function() {
        if (sessionValue === "") {
           
            window.location.href = 'login-signup.html';
        } else {
            // Ako je sesija aktivna, omogući pristup 'story' sekciji
            console.log("Pristup 'story' sekciji dozvoljen.");
        }
    });
});


function toggleMyProfile() {
    const options = document.querySelector('.options');
    if (options.classList.contains('show')) {
        options.classList.remove('show');
    } else {
        options.classList.add('show');
    }
}

function hideMyProfile() {
    document.querySelector('.options').classList.remove('show');
}




document.querySelector('.MyAccount').addEventListener('click', function() {
    const options = document.querySelector('.options');
    options.classList.toggle('show-options');
});

document.addEventListener("DOMContentLoaded", () => {
    const session = new Session();
    const userId = session.getSession();

    if (userId) {
        fetch(`${new Users().api_url}/users/${userId}`)
            .then(response => response.json())
            .then(user => {
                const usernameElement = document.getElementById("account-username");
                const emailElement = document.getElementById("account-email");

                if (usernameElement) {
                    usernameElement.innerHTML = `Username: <span class="dynamic-content">${user.username}</span>`;
                } else {
                    console.error("Username element not found.");
                }

                if (emailElement) {
                    emailElement.innerHTML = `Email: <span class="dynamic-content">${user.email}</span>`;
                } else {
                    console.error("Email element not found.");
                }
            })
            .catch(error => console.error("Error loading user data:", error));
    }
});





document.querySelector('.logout').addEventListener('click', (e)=> {
    let session = new Session();
    session.destroySession(); // Uništava sesiju
    
    
    // Preusmerava korisnika na stranicu za login/signup
    window.location.href = 'login-signup.html';
});

window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('deleteaccount').addEventListener('click', () => {
        let user = new Users();
        user.deleteAccount();

    });
});

// Get elements
const profileImg = document.getElementById('conectChat');
const storyModal = document.getElementById('storyModal');
const storyImage = document.getElementById('storyImage');

// Load saved data on page load
window.onload = function () {
    const savedProfileImg = localStorage.getItem('profileImage');
    const savedStoryImg = localStorage.getItem('storyImage');

    // Load profile image if saved
    if (savedProfileImg) {
        profileImg.src = savedProfileImg;
    }

    // Load story image if saved
    if (savedStoryImg) {
        profileImg.classList.add('story-active');
    }
};

// Handle file selection
function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            // Save story image to localStorage
            localStorage.setItem('storyImage', e.target.result);
            profileImg.classList.add('story-active');
        };
        reader.readAsDataURL(file);
    }
}

// Show the story modal with the uploaded story image
function showStoryImage() {
    const savedStoryImg = localStorage.getItem('storyImage');
    if (savedStoryImg) {
        storyImage.src = savedStoryImg;
        storyModal.style.display = 'flex';
    }
}

// Hide the story modal
function closeStoryImage() {
    storyModal.style.display = 'none';
}

// Show and hide the upload section
function showStory() {
    document.querySelector('.picbackground').style.display = 'block';
}

function hideStory() {
    document.querySelector('.picbackground').style.display = 'none';
}


// Function to delete the story
function deleteStory() {
    // Remove story image from localStorage
    localStorage.removeItem('storyImage');
    
    // Reset profile image border
    profileImg.classList.remove('story-active');
    
    // Close the modal
    closeStoryImage();
    
    alert("Story has been deleted successfully!");
}


// Get logout button
const logoutButton = document.querySelector('.logout');

// Handle logout action
logoutButton.addEventListener('click', function () {

    // Clear story data and uploaded profile image from localStorage
    localStorage.removeItem('storyImage');
    localStorage.removeItem('profileImage'); // Remove profile image from storage

    // Reset profile images to default
    const defaultImage = 'Images/maleuser.png';  // Path to the default image
    const profilePictures = document.querySelectorAll('#profilePicture, #profile-li-picture, #conectChat');
    profilePictures.forEach(picture => {
        if (picture.tagName === 'IMG') {
            picture.src = defaultImage;
        } else {
            picture.style.backgroundImage = `url('${defaultImage}')`;
        }
    });

    // Reset profile image border
    profileImg.classList.remove('story-active');

    // Perform logout action
    
    alert("You have successfully logged out.");
    window.location.href = 'login-signup.html'; // Redirect to login page
});


// Get delete account button
const deleteAccountButton = document.querySelector('.deleteaccount');

// Handle delete account action
deleteAccountButton.addEventListener('click', function () {
    localStorage.removeItem('profileImage');
    localStorage.removeItem('storyImage');

    // Reset profile image border
    profileImg.classList.remove('story-active');

    // Perform delete account action
    alert("Your account has been deleted.");
    deleteAccount() 
    window.location.href = 'login-signup.html'; // Preusmeravanje na signup stranicu
});


// Selektujemo elemente
const startCallButton = document.getElementById("start-call");
const videoCallContainer = document.getElementById("video-call");
const endCallButton = document.getElementById("end-call-btn");

// Klik na ikonu telefona
startCallButton.addEventListener("click", () => {
    videoCallContainer.classList.remove("hidden");
});

// Klik na dugme za prekidanje poziva
endCallButton.addEventListener("click", () => {
    videoCallContainer.classList.add("hidden");
});















