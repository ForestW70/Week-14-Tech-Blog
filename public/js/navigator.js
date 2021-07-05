


const goToLoginScreen = async (e) => {
    
    const request = await fetch('/api/users/login', {
        method: 'GET',
        headers: {}
    })
    if (request.ok) {
        document.location.replace('/login');
    } else {
        alert(response.statusText);
    }
    // switchTabStyle('goToLogin');
}

const goToBlog = async (e) => {
    
    const request = await fetch('/home', {
        method: 'GET',
        headers: {}
    })
    if (request.ok) {
        document.location.replace('/home');
    } else {
        alert(response.statusText);
    }
    // switchTabStyle('goToBlog');
}

const goToUserHome = async (e) => {
    
    const request = await fetch('/user-dash', {
        method: 'GET',
        headers: {}
    })
    if (request.ok) {
        document.location.replace('/user-dash');
    } else {
        alert(response.statusText);
    }
    // switchTabStyle('goToUserHome');
}

const goToCreatePost = async (e) => {
    
    const request = await fetch('/create-post', {
        method: 'GET',
        headers: {}
    });
    if (request.ok) {
        document.location.replace('/create-post');
    } else {
        alert(response.statusText);
    }
    // switchTabStyle('goToCreatePost');
}

const switchTabStyle = () => {
    function moveClass(id) {
        const navTabs = document.querySelectorAll('.nav-el');
        navTabs.forEach(tab => {
            tab.classList.remove('cur-tab')
            document.getElementById(id).parentNode.classList.add('cur-tab');
        })
    }
    
    const path = window.location.href
    let tab = path.split('/')[3];

    // console.log(tab);
    
    switch (tab) {
        case "login":
            moveClass('goToLogin')
            break;
        case "home":
            moveClass('goToBlog')
            break;
        case "user-dash":
            moveClass('goToUserHome')
            break;
        case "create-post":
            moveClass('goToCreatePost')
            break;
        default:
            return;
    }
}

switchTabStyle();


// document.getElementById('goToLogin').addEventListener('click', goToLoginScreen);
// document.getElementById('goToBlog').addEventListener('click', goToBlog);
// document.getElementById('goToUserHome').addEventListener('click', goToUserHome);
// document.getElementById('goToCreatePost').addEventListener('click', goToCreatePost)