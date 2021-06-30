const goToLoginScreen = async () => {
    const request = await fetch('/api/users/login', {
        method: 'GET',
        headers: {}
    })
    if (request.ok) {
        document.location.replace('/login');
    } else {
        alert(response.statusText);
    }
}

const goToBlog = async () => {
    const request = await fetch('/home', {
        method: 'GET',
        headers: {}
    })
    if (request.ok) {
        document.location.replace('/home');
    } else {
        alert(response.statusText);
    }
}

const goToUserHome = async () => {
    const request = await fetch('/user-dash', {
        method: 'GET',
        headers: {}
    })
    if (request.ok) {
        document.location.replace('/user-dash');
    } else {
        alert(response.statusText);
    }
}

const goToCreatePost = async () => {
    const request = await fetch('/create-post', {
        method: 'GET',
        headers: {}
    });
    if (request.ok) {
        document.location.replace('/create-post');
    } else {
        alert(response.statusText);
    }
}


document.getElementById('goToLogin').addEventListener('click', goToLoginScreen);
document.getElementById('goToBlog').addEventListener('click', goToBlog);
document.getElementById('goToUserHome').addEventListener('click', goToUserHome);
document.getElementById('goToCreatePost').addEventListener('click', goToCreatePost)