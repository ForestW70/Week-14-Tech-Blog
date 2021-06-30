// const { DataTypes, json } = require("sequelize/types");

const newPost = async (event) => {
    event.preventDefault();

    const title = document.getElementById('postTitle').value.trim();
    const body = document.getElementById('postBody').value.trim();
    const userId = document.getElementById('userId').value.trim();
    const dateCreated = Date.now();

    try {
        const response = await fetch('/api/blog/new')
        
    } catch (err) {
        console.log(err);
    }

}

document.getElementById('create-post-button').addEventListener('click', newPost)
