const loginFormHandler = async (event) => {
    event.preventDefault();

    // Gather the data from the form elements on the page
    const username = document.getElementById('login-user').value.trim();
    const password = document.getElementById('login-pass').value.trim();

    if (!username || !password) {
        alert('Please type in both your username and password.');
    }
    
    try {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        // if (!response.ok) {
        //     alert('Failed to log in');  
        // } 

    } catch (err) {
        console.log(err);
        alert('something went wrong!');
    }
};

const createUserFormHandler = async (event) => {
    event.preventDefault();

    const username = document.getElementById('create-user').value.trim();
    const password = document.getElementById('create-pass').value.trim();
    const passConfirm = document.getElementById('password-confirm').value.trim();

    if (!password === passConfirm) {
        alert("Passwords do not match. Please try again.");
    }


    try {
        const res = await fetch('/api/users/' + username);
        if (res.status === 404) {
            const newUserRes = await fetch('/api/users/add', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' },
            })

            // if (!newUserRes.ok) {
            //     alert('Failed to sign up! Make sure password has 8 or more characters!');   
            // } 

        } else {
            alert('Username already exists. Please try again.');
        }
    } catch (err) {
        console.log(err);
        alert('something went wrong!');
    }
}


document.getElementById('loginBtn').addEventListener('click', loginFormHandler);
document.getElementById('createUserBtn').addEventListener('click', createUserFormHandler);