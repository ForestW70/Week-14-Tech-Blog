
const switchTabStyle = () => {
    function moveClass(id) {
        const navTabs = document.querySelectorAll('.nav-el');
        navTabs.forEach(tab => {
            tab.classList.remove('cur-tab')
            document.getElementById(id).parentNode.classList.add('cur-tab');
        })
    }
    
    // find current tab.
    const path = window.location.href
    let tab = path.split('/')[3];
    
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

// this script allows me to change the style of the tab that you are currently on. 
