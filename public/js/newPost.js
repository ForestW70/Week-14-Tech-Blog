
const newPost = async (event) => {
    event.preventDefault();

    const post_title = document.getElementById('postTitle').value.trim();
    const post_body = document.getElementById('postBody').value;
    const date_created = Date.now();

    try {
        const response = await fetch('/api/blog/new-post', {
            method: 'POST',
            body: JSON.stringify({post_title, post_body, date_created}),
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok) {
            document.location.replace('/user-dash');
        } else {
            alert('Something went wrong!');
        }
        
    } catch (err) {
        console.log(err);
    }

}

document.getElementById('new-post-btn').addEventListener('click', newPost)
