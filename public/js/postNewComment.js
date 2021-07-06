
const postComment = async () => {
    const userInfo = document.getElementById('grabUid').innerText
    const post_id = userInfo.split(' ')[2];
    const comment_body = document.getElementById('commentBody').value.trim();

    const req = await fetch('/api/blog/new-comment', {
        method: 'POST',
        body: JSON.stringify({comment_body, post_id }),
        headers: { 'Content-Type': 'application/json' },
        
    })
    if (req.ok) {
        document.location.replace(window.location.href);
    } else if(req.status === 401) {
        document.location.replace("/api/users/redirect");
    } else {
        alert('Failed to comment! Please try again!');   

    }
}

document.getElementById('new-comment-btn').addEventListener('click', postComment)
