
// Učitavanje slike iz localStorage prilikom učitavanja stranice
window.addEventListener('load', function () {
    const profilePictures = document.querySelectorAll('#profilePicture, #profile-li-picture, #conectChat');
    const storedImage = localStorage.getItem('profileImage');

    if (storedImage) {
        profilePictures.forEach(picture => {
            if (picture.tagName === 'IMG') {
                picture.src = storedImage; // Ako je <img>
            } else {
                picture.style.backgroundImage = `url('${storedImage}')`; // Ako koristi background-image
            }
        });
    }
});

// Klik na dugme za otvaranje pop-up opcija
document.querySelector('.edit-text').addEventListener('click', function() {
    const popup = document.getElementById('edit-options');
    popup.style.display = popup.style.display === 'none' || popup.style.display === '' ? 'block' : 'none';
});



// Upload nove slike
document.getElementById('upload-new').addEventListener('click', function () {
    const fileInput = document.getElementById('file-upload');
    const profilePictures = document.querySelectorAll('#profilePicture, #profile-li-picture, #conectChat');
    const message = document.getElementById("message");

    fileInput.click();

    fileInput.addEventListener('change', function () {
        const file = fileInput.files[0];
        if (file) {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("UPLOADCARE_PUB_KEY", "bebc7bc34cea58d7229a");
            formData.append("filename", file.name);

            fetch("https://upload.uploadcare.com/base/", {
                method: "post",
                body: formData,
                headers: { "Accept": "application/json" }
            })
            .then(response => response.json())
            .then(data => {
                const imageUrl = `https://ucarecdn.com/${data.file}/${file.name}`;
                message.textContent = "File uploaded successfully";
                message.style.display = 'block';
               

                profilePictures.forEach(picture => {
                    if (picture.tagName === 'IMG') {
                        picture.src = imageUrl;
                    } else {
                        picture.style.backgroundImage = `url('${imageUrl}')`;
                    }
                });

                localStorage.setItem('profileImage', imageUrl);

                setTimeout(() => { message.style.display = 'none'; }, 3000);
            })
            .catch(error => {
                console.error("Error:", error);
                message.textContent = "Failed to upload file";
                message.style.display = 'block';
            });
        }
    }, { once: true });
});




// Prikazivanje poruke nakon promene slike
document.getElementById('file-upload').addEventListener('change', () => {
    const message = document.getElementById('message');
    message.textContent = "Uploading...";
    message.style.display = 'block';
    setTimeout(() => message.style.display = 'none', 3000);
});


document.getElementById('remove-picture').addEventListener('click', function() {
    const defaultImage = 'Images/maleuser.png';  // Path to default image
    document.getElementById('profilePicture').src = defaultImage;

    // Remove the image from localStorage
    localStorage.removeItem('profileImage');
});



//EDIT PROFILE SECTION
function enableEditing(inputId) {
    document.getElementById(inputId).disabled = false;
}

// Punjenje forme nakon učitavanja stranice
document.addEventListener("DOMContentLoaded", () => {
    const session = new Session();
    const userId = session.getSession();

    if (userId) {
        fetch(`${new Users().api_url}/users/${userId}`)
            .then(response => response.json())
            .then(user => {
                document.getElementById("edit-username").value = user.username;
                document.getElementById("edit-email").value = user.email;
                document.getElementById("edit-password").value = user.password;
                document.getElementById("repeat-password").value = user.password;
            })
            .catch(error => console.error("Error loading user data:", error));
    } else {
        alert("No user session found. Redirecting to login.");
        window.location.href = "login.html";
    }
});

// Ažuriranje korisničkih podataka
document.getElementById("edit-profile-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const session = new Session();
    const userId = session.getSession();

    if (userId) {
        const updatedData = {
            username: document.getElementById("edit-username").value.trim(),
            email: document.getElementById("edit-email").value.trim(),
            password: document.getElementById("edit-password").value.trim(),
        };

        fetch(`${new Users().api_url}/users/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedData)
        })
        .then(response => {
            if (response.ok) {
                alert("Profile updated successfully!");
                window.location.reload(); // Osvežava stranicu sa ažuriranim podacima
            } else {
                alert("Error updating profile. Please try again.");
            }
        })
        .catch(error => console.error("Error updating user data:", error));
    } else {
        alert("No user session found. Redirecting to login.");
        window.location.href = "login.html";
    }
});

function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    const type = field.getAttribute("type") === "password" ? "text" : "password";
    field.setAttribute("type", type);
}

function enableEditing(fieldId) {
    const field = document.getElementById(fieldId);
    field.disabled = false;
    field.focus();
}

