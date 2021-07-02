const deletePost = async (e) => {
    const post_id = e.target.dataset.id;

    if (!confirm("Are you sure you want to delete your post?")) {
        alert("We'll bring you back!");
        return;
    } 

    try {
        const delPost = await fetch('/api/blog/delete/' + post_id, {
            method: 'DELETE',
        })

        if (delPost.ok) {
            alert('Post deleted!');
            document.location.replace('/user-dash');
        } else {
            alert('Something went wrong!')
        }
    } catch (err) {
        alert(err);
    }
}

const deleteButtons = document.querySelectorAll('.del-post');

deleteButtons.forEach(btn => {
    btn.addEventListener('click', deletePost);
})