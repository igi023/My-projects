class Users {
    user_id = '';
    username = '';
    email = '';
    password = '';
    gender = ''; 
    languages = []; 
    api_url = 'https://66ce4442199b1d62868841be.mockapi.io';

    create() {
        let data = {
            username: this.username,
            email: this.email,
            password: this.password,
            gender: this.gender,
            languages: this.languages 
        };

        data = JSON.stringify(data);

        fetch(this.api_url + '/users', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: data
        })
        .then(response => response.json())
        .then(data => {
            let session = new Session();
            session.user_id = data.id;
            session.startSession();     
            window.location.href = 'mainpage.html'; 
        })
        .catch(error => console.error('Error:', error)); 
    }


    deleteAccount() {
        let session = new Session();
        let userId = session.getSession(); // Dohvata user_id iz sesije
        console.log('Deleting user with ID:', userId);
    
        if (userId) {
            fetch(this.api_url + '/users/' + userId, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                console.log('Response status:', response.status);
                if (response.ok) {
                    console.log('User deleted successfully.');
                    session.destroySession();
                    window.location.href = 'login-signup.html';
                } else {
                    alert('There was an error deleting the account. Please try again.');
                }
            })
            .catch(error => console.error('Error:', error));
        } else {
            alert('No user session found. Please log in again.');
            window.location.href = 'login.html';
        }
    }
    
    


    



    login() {
        fetch(this.api_url + '/users')
            .then(response => response.json())
            .then(data => {
                let loginOK = 0;
                data.forEach(db_user => {
                    if (db_user.email === this.email && db_user.password === this.password) {
                        let session = new Session();
                        session.user_id = db_user.id;
                        session.startSession();
                        loginOK = 1;
                        window.location.href = 'mainpage.html';
                    }
                });

                if (loginOK === 0) {
                    alert('Incorrect email or password. Please try again.');
                }
            })
            .catch(error => console.error('Error:', error));
    }

   



    




}
