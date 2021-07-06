
const addCommentBtns = document.querySelectorAll(".add-comment");

const goToSinglePost = async (e) => {
    const postId = e.target.dataset.id;
    const postBy = e.target.dataset.username;
    
    const req = await fetch(`/post/${postBy}/${postId}`, {
        method: 'GET',
        headers: {},
    })
    if (req.ok) {
        document.location.replace(`/post/${postBy}/${postId}`);
    } else {
        alert(req.status.statusText);
    }
}

// addCommentBtns.forEach(btn => {
//     btn.addEventListener('click', goToSinglePost);
// })

