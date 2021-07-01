
const addCommentBtns = document.querySelectorAll(".add-comment");

const goToSinglePost = async (e) => {
    const postId = e.target.dataset.id;
    const req = await fetch('/post/' + postId, {
        method: 'GET',
        headers: {}
    })
    if (req.ok) {
        document.location.replace('/post/' + postId);
    } else {
        alert(req.status.statusText);
    }

}

addCommentBtns.forEach(btn => {
    btn.addEventListener('click', goToSinglePost);
})

