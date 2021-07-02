
const postComment = async (e) => {
    const post_id = e.target.dataset.id;
    const comment_body = document.getElementById('commentBody').value.trim();

    const req = await fetch('/api/blog/new-comment', {
        method: 'POST',
        body: JSON.stringify({comment_body, post_id }),
        headers: { 'Content-Type': 'application/json' },

    })
    if (req.ok) {
        document.location.replace('/post/' + post_id);
    } else {
        alert('Failed to comment! Please try again!');   
    }
}

document.getElementById('new-comment-btn').addEventListener('click', postComment)
