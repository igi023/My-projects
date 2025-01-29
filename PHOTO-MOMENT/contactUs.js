document.addEventListener('DOMContentLoaded', () => {
    let inputs = document.querySelectorAll('input, textarea');
    let errors = {
        "name": [],
        "email": [],
        "message": []
    };

    inputs.forEach(element => {
        element.addEventListener('change', e => {
            let currentInput = e.target;
            let inputValue = currentInput.value;
            let inputName = currentInput.getAttribute('name');
            let errorElement = document.getElementById(`${inputName}_error`);
            
            errors[inputName] = []; // Clear previous errors

            // Validation rules
            if (inputName === 'name' && inputValue.length < 5) {
                errors[inputName].push('Name and Last name must contain at least 5 characters');
            } else if (inputName === 'name' && !/^[a-zA-Z]+$/.test(inputValue)) {
                errors[inputName].push('Name and Last name must contain only letters');
            }

            if (inputName === 'email' && !/\S+@\S+\.\S+/.test(inputValue)) {
                errors[inputName].push('Please enter a valid email address');
            }

            if (inputName === 'message' && inputValue.length < 10) {
                errors[inputName].push('Message must contain at least 10 characters');
            }

            // Display errors
            errorElement.innerHTML = '';
            if (errors[inputName].length > 0) {
                errors[inputName].forEach(error => {
                    let li = document.createElement('li');
                    li.textContent = error;
                    errorElement.appendChild(li);
                });
            }
        });
    });
});
