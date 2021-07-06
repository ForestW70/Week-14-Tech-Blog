const logout = async () => {
    if (confirm("Are you sure you want to log out?")) {
        alert("See ya soon!");
    } else {
        return;
    }
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
        alert(response.statusText);
    } else {
        location.replace('/home');
    }
};

document.querySelector('#logout').addEventListener('click', logout);
